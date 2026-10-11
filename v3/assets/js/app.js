/* =====================================================
   Drakono valtys – v3 (e-parduotuvės logika, demo)
   Slideris, filtrai, krepšelis, greita peržiūra,
   checkout tipo užklausa, countdown, reveal, parallax.
   WordPress + WooCommerce versijoje krepšelį ir
   užsakymą pakeičia WooCommerce (bookings/produktai).
   ===================================================== */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var I18N = window.DV_I18N;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function txt(key) { var el = document.querySelector('[data-i18n="' + key + '"]'); return el ? el.textContent.trim() : key; }
  function fmt(n) { return Math.round(n).toLocaleString('lt-LT') + ' €'; }
  function todayISO() { var d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); }

  /* ---------- Header ---------- */
  var header = $('#header');
  window.addEventListener('scroll', function () { header.classList.toggle('is-scrolled', window.scrollY > 10); }, { passive: true });

  /* ---------- Drawers ---------- */
  var overlay = $('#overlay'), burger = $('#burger');
  function openDrawer(id) {
    closeDrawers(true);
    var d = document.getElementById(id);
    d.classList.add('is-open'); d.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-on'); document.body.classList.add('no-scroll');
  }
  function closeDrawers(keepScroll) {
    $$('.drawer.is-open').forEach(function (d) { d.classList.remove('is-open'); d.setAttribute('aria-hidden', 'true'); });
    overlay.classList.remove('is-on');
    if (!keepScroll) document.body.classList.remove('no-scroll');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () { openDrawer('drawerNav'); burger.setAttribute('aria-expanded', 'true'); });
  $$('[data-close]').forEach(function (b) { b.addEventListener('click', function () { closeDrawers(); }); });
  overlay.addEventListener('click', function () { closeDrawers(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawers(); });
  $('#cartBtn').addEventListener('click', function () { openDrawer('drawerCart'); });
  $('#cartBtnMobile').addEventListener('click', function () { openDrawer('drawerCart'); });
  $$('#drawerNav a').forEach(function (a) { a.addEventListener('click', function () { closeDrawers(); }); });

  /* ---------- Modals ---------- */
  $$('dialog').forEach(function (dlg) {
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  });
  $$('[data-close-dialog]').forEach(function (b) { b.addEventListener('click', function () { b.closest('dialog').close(); }); });

  /* ---------- Hero slider ---------- */
  var slides = $$('#slider .slide'), dotsWrap = $('#sliderDots'), cur = 0, timer;
  slides.forEach(function (s, i) {
    var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', (i + 1));
    if (i === 0) b.classList.add('is-active');
    b.addEventListener('click', function () { go(i); });
    dotsWrap.appendChild(b);
  });
  function go(i) {
    slides[cur].classList.remove('is-active'); dotsWrap.children[cur].classList.remove('is-active');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('is-active'); dotsWrap.children[cur].classList.add('is-active');
    restart();
  }
  function restart() { clearInterval(timer); if (!reduceMotion) timer = setInterval(function () { go(cur + 1); }, 6000); }
  $('#slidePrev').addEventListener('click', function () { go(cur - 1); });
  $('#slideNext').addEventListener('click', function () { go(cur + 1); });
  $('#slider').addEventListener('mouseenter', function () { clearInterval(timer); });
  $('#slider').addEventListener('mouseleave', restart);
  restart();

  /* ---------- Catalog: filters, sort, search ---------- */
  var grid = $('#productGrid'), cards = $$('.p-card', grid), filterBtns = $$('#filters button'), emptyMsg = $('#catalogEmpty');
  function applyFilter(type) {
    type = type || 'all';
    filterBtns.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-filter') === type); });
    var n = 0;
    cards.forEach(function (c) {
      var show = type === 'all' || c.getAttribute('data-type') === type;
      c.hidden = !show; if (show) { n++; c.classList.add('in'); }
    });
    emptyMsg.hidden = n > 0;
  }
  filterBtns.forEach(function (b) { b.addEventListener('click', function () { applyFilter(b.getAttribute('data-filter')); }); });
  $$('a[data-filter]').forEach(function (a) { a.addEventListener('click', function () { applyFilter(a.getAttribute('data-filter')); closeDrawers(); }); });
  $('#sort').addEventListener('change', function () {
    var v = this.value;
    cards.slice().sort(function (a, b) {
      if (v === 'pop') return (+a.getAttribute('data-pop')) - (+b.getAttribute('data-pop'));
      var pa = +a.getAttribute('data-price'), pb = +b.getAttribute('data-price');
      return v === 'asc' ? pa - pb : pb - pa;
    }).forEach(function (c) { grid.appendChild(c); });
  });
  $('#searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var q = $('#searchInput').value.trim().toLowerCase(), n = 0;
    filterBtns.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-filter') === 'all' && !q); });
    cards.forEach(function (c) {
      var t = (c.querySelector('.p-name').textContent + ' ' + c.querySelector('.p-cat').textContent + ' ' + c.querySelector('.p-meta').textContent).toLowerCase();
      var show = !q || t.indexOf(q) > -1;
      c.hidden = !show; if (show) { n++; c.classList.add('in'); }
    });
    emptyMsg.hidden = n > 0;
    $('#katalogas').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---------- Countdown (demo: +12 d.) ---------- */
  var cdTarget = Date.now() + (12 * 86400 + 7 * 3600 + 15 * 60) * 1000, cdEls = {};
  $$('#countdown [data-cd]').forEach(function (el) { cdEls[el.getAttribute('data-cd')] = el; });
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tick() {
    var s = Math.max(0, Math.floor((cdTarget - Date.now()) / 1000));
    var d = Math.floor(s / 86400); s -= d * 86400;
    var h = Math.floor(s / 3600); s -= h * 3600;
    var m = Math.floor(s / 60); s -= m * 60;
    cdEls.d.textContent = pad(d); cdEls.h.textContent = pad(h); cdEls.m.textContent = pad(m); cdEls.s.textContent = pad(s);
  }
  tick(); setInterval(tick, 1000);

  /* ---------- Featured: gallery + tabs ---------- */
  var fgMain = $('#fgMain');
  $$('#fgThumbs button').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('#fgThumbs button').forEach(function (x) { x.classList.toggle('is-active', x === b); });
      fgMain.style.opacity = 0;
      setTimeout(function () { fgMain.src = b.getAttribute('data-src'); fgMain.onload = function () { fgMain.style.opacity = 1; }; }, 150);
    });
  });
  $$('#tabs .tab-list button').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('#tabs .tab-list button').forEach(function (x) { x.classList.toggle('is-active', x === b); });
      $$('#tabs .tab-panel').forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-panel') === b.getAttribute('data-tab')); });
    });
  });

  /* ---------- Reviews carousel ---------- */
  var track = $('#revTrack');
  $$('.rev-nav button').forEach(function (b) {
    b.addEventListener('click', function () {
      var w = track.querySelector('.rev-card').offsetWidth + 20;
      track.scrollBy({ left: w * (+b.getAttribute('data-dir')), behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  /* ---------- Newsletter ---------- */
  $('#nlForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var em = $('#nlEmail');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)) { em.classList.add('is-invalid'); em.focus(); return; }
    em.classList.remove('is-invalid'); $('#nlOk').hidden = false; em.value = '';
  });

  /* ---------- Reveal / parallax / tilt ---------- */
  var revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else { revealEls.forEach(function (el) { el.classList.add('in'); }); }
  var pxEls = $$('[data-parallax]'), canParallax = !reduceMotion && window.matchMedia('(min-width: 768px)').matches, ticking = false;
  function parallax() {
    if (!canParallax) return;
    var vh = window.innerHeight;
    pxEls.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      var center = r.top + r.height / 2 - vh / 2;
      el.style.transform = 'translate3d(0,' + (center * (parseFloat(el.getAttribute('data-parallax')) || 0.2)).toFixed(1) + 'px,0)';
    });
  }
  window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(function () { parallax(); ticking = false; }); ticking = true; } }, { passive: true });
  parallax();
  if (!reduceMotion && canHover) {
    $$('.tilt').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        card.style.setProperty('--rx', (-y * 10).toFixed(2) + 'deg'); card.style.setProperty('--ry', (x * 10).toFixed(2) + 'deg');
      });
      card.addEventListener('pointerleave', function () { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
    });
  }

  /* =====================================================
     PRODUKTAI IR KREPŠELIS
     ===================================================== */
  var products = {};
  cards.forEach(function (card) {
    var unitEl = card.querySelector('.p-price span');
    products[card.getAttribute('data-id')] = {
      id: card.getAttribute('data-id'), type: card.getAttribute('data-type'),
      price: +card.getAttribute('data-price'), oldPrice: card.getAttribute('data-old-price') ? +card.getAttribute('data-old-price') : null,
      pricing: card.getAttribute('data-pricing'), people: +card.getAttribute('data-people'),
      nameKey: card.querySelector('.p-name').getAttribute('data-i18n'), catKey: card.getAttribute('data-cat'),
      metaKey: card.querySelector('.p-meta').getAttribute('data-i18n'), unitKey: unitEl ? unitEl.getAttribute('data-i18n') : null,
      img: card.querySelector('.p-img').getAttribute('src'),
      badge: card.querySelector('.p-badge') ? card.querySelector('.p-badge') : null,
      checkKeys: $$('.p-details li', card).map(function (li) { return li.getAttribute('data-i18n'); })
    };
  });
  function boats(n) { return Math.max(1, Math.ceil(n / 20)); }
  function itemPrice(item) {
    var p = products[item.id];
    if (p.pricing === 'boat') return p.price * boats(item.people);
    if (p.pricing === 'person') return p.price * item.people;
    if (p.pricing === 'voucher') return item.amount;
    return p.price;
  }
  function itemDesc(item) {
    var p = products[item.id];
    if (p.pricing === 'voucher') return I18N.t('cart.voucher') + ' ' + item.amount + ' €' + (item.to ? ' · ' + I18N.t('cart.for') + ' ' + item.to : '');
    var parts = [item.date || I18N.t('cart.anydate')];
    parts.push(p.pricing === 'boat' ? I18N.sizeLabel(item.people, boats(item.people)) : I18N.peopleLabel(item.people));
    if (item.time && item.time !== 'any') { var opt = $('#qvTime option[value="' + item.time + '"]'); if (opt) parts.push(opt.textContent); }
    return parts.join(' · ');
  }

  var cart = [];
  try { cart = JSON.parse(localStorage.getItem('dv3-cart') || '[]'); } catch (e) { cart = []; }
  cart = cart.filter(function (i) { return products[i.id]; });
  function save() { try { localStorage.setItem('dv3-cart', JSON.stringify(cart)); } catch (e) {} }
  function total() { return cart.reduce(function (s, i) { return s + itemPrice(i); }, 0); }
  function addToCart(item) {
    cart.push(item); save(); renderCart();
    $$('.cart-count').forEach(function (b) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
  }
  function renderCart() {
    var wrap = $('#cartItems'); wrap.innerHTML = '';
    cart.forEach(function (item) {
      var p = products[item.id], el = document.createElement('div'); el.className = 'cart-item';
      el.innerHTML = '<img src="' + esc(p.img) + '" alt=""><div><b>' + esc(txt(p.nameKey)) + '</b><span>' + esc(itemDesc(item)) + '</span><em>' + fmt(itemPrice(item)) + '</em></div>' +
        '<button type="button" class="cart-remove" aria-label="' + esc(I18N.t('cart.remove')) + '" data-uid="' + esc(item.uid) + '">×</button>';
      wrap.appendChild(el);
    });
    $('#cartTotal').textContent = fmt(total());
    $('#cartEmpty').hidden = cart.length > 0; $('#cartFoot').hidden = cart.length === 0;
    $$('.cart-count').forEach(function (b) { b.textContent = cart.length; b.classList.toggle('is-on', cart.length > 0); });
    $$('.cart-remove', wrap).forEach(function (b) {
      b.addEventListener('click', function () { cart = cart.filter(function (i) { return i.uid !== b.getAttribute('data-uid'); }); save(); renderCart(); });
    });
  }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  /* ---------- Greita peržiūra ---------- */
  var qv = $('#quickView'), qvId = null;
  function priceHtml(p) {
    var unit = p.unitKey ? ' <span>' + esc(txt(p.unitKey)) + '</span>' : '';
    if (p.oldPrice) return '<s>' + p.oldPrice + ' €</s> ' + p.price + ' €' + unit;
    return (p.pricing === 'fixed' ? '' : '<small>' + esc(txt('pk.from')) + '</small> ') + p.price + ' €' + unit;
  }
  function fillQuickView() {
    var p = products[qvId];
    $('#qvImg').src = p.img; $('#qvCat').textContent = txt(p.catKey); $('#qvName').textContent = txt(p.nameKey);
    $('#qvMeta').textContent = txt(p.metaKey); $('#qvPrice').innerHTML = priceHtml(p);
    var badge = $('#qvBadge');
    if (p.badge) { badge.textContent = p.badge.textContent; badge.className = p.badge.className; badge.hidden = false; } else badge.hidden = true;
    var ul = $('#qvChecks'); ul.innerHTML = '';
    p.checkKeys.forEach(function (k) { var li = document.createElement('li'); li.textContent = txt(k); ul.appendChild(li); });
    var isV = p.pricing === 'voucher';
    $('#qvFields').hidden = isV; $('#qvVoucher').hidden = !isV;
    updateEst();
  }
  function openQuickView(id) {
    var p = products[id]; if (!p) return;
    qvId = id;
    $('#qvPeople').value = p.people;
    $('#qvPeople').min = p.pricing === 'fixed' ? 20 : 1; $('#qvPeople').max = p.pricing === 'fixed' ? 40 : 100;
    $('#qvDate').value = ''; $('#qvTo').value = '';
    fillQuickView();
    if (typeof qv.showModal === 'function') qv.showModal();
  }
  function qvItem() {
    var p = products[qvId];
    return { uid: uid(), id: p.id, date: $('#qvDate').value, people: Math.max(1, parseInt($('#qvPeople').value, 10) || p.people), time: $('#qvTime').value, amount: +$('#qvAmount').value, to: $('#qvTo').value.trim() };
  }
  function updateEst() { if (qvId) $('#qvEst').textContent = fmt(itemPrice(qvItem())); }
  $('#qvForm').addEventListener('input', updateEst);
  $('#qvForm').addEventListener('change', updateEst);
  $('#qvForm').addEventListener('submit', function (e) { e.preventDefault(); addToCart(qvItem()); qv.close(); openDrawer('drawerCart'); });
  $('#qvBuyNow').addEventListener('click', function () { addToCart(qvItem()); qv.close(); openCheckout(); });
  $$('.p-add, .p-quick').forEach(function (b) {
    b.addEventListener('click', function () {
      var card = b.closest('.p-card');
      openQuickView(b.getAttribute('data-id') || (card && card.getAttribute('data-id')));
    });
  });
  $('#qvDate').min = todayISO(); $('#buyDate').min = todayISO();

  /* ---------- Savaitės pasiūlymo „buy box“ ---------- */
  function buyBoxItem() {
    return { uid: uid(), id: 'race', date: $('#buyDate').value, people: Math.min(40, Math.max(20, parseInt($('#buyPeople').value, 10) || 30)), time: $('#buyTime').value, amount: 0, to: '' };
  }
  $('#buyBox').addEventListener('submit', function (e) { e.preventDefault(); addToCart(buyBoxItem()); openDrawer('drawerCart'); });
  $('#buyNow').addEventListener('click', function () { addToCart(buyBoxItem()); openCheckout(); });

  /* ---------- Checkout ---------- */
  var co = $('#checkout'), coForm = $('#checkoutForm'), coError = $('#coError');
  function openCheckout() {
    closeDrawers();
    $('#coGrid').hidden = false; $('#coSuccess').hidden = true; coError.hidden = true;
    var wrap = $('#coItems'); wrap.innerHTML = '';
    cart.forEach(function (item) {
      var p = products[item.id], el = document.createElement('div'); el.className = 'co-item';
      el.innerHTML = '<div><b>' + esc(txt(p.nameKey)) + '</b><span>' + esc(itemDesc(item)) + '</span></div><em>' + fmt(itemPrice(item)) + '</em>';
      wrap.appendChild(el);
    });
    $('#coTotal').textContent = fmt(total());
    if (typeof co.showModal === 'function') co.showModal();
  }
  $('#checkoutBtn').addEventListener('click', openCheckout);
  coForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('#coName'), phone = $('#coPhone'), email = $('#coEmail'), consent = $('#coConsent');
    var err = null;
    if (!name.value.trim() || !phone.value.trim() || !email.value.trim()) err = I18N.t('err.required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) err = I18N.t('err.email');
    else if (!consent.checked) err = I18N.t('err.consent');
    if (err) { coError.textContent = err; coError.hidden = false; return; }
    var payload = {
      order: 'DV-' + new Date().getFullYear() + '-' + String(Math.floor(1000 + Math.random() * 9000)),
      items: cart.map(function (i) { return { id: i.id, name: txt(products[i.id].nameKey), details: itemDesc(i), price: itemPrice(i) }; }),
      total: total(), name: name.value, company: $('#coCompany').value, phone: phone.value, email: email.value,
      location: $('#coLocation').value, message: $('#coMessage').value
    };
    if (window.console) console.log('[DEMO] Užklausa:', payload); /* WP: WooCommerce order / formos įskiepis */
    $('#orderNo').textContent = payload.order;
    $('#coGrid').hidden = true; $('#coSuccess').hidden = false;
    cart = []; save(); renderCart(); coForm.reset();
  });

  /* ---------- Kalbos pakeitimas: perpiešti krepšelį ---------- */
  document.addEventListener('dv:langchange', function () { renderCart(); if (qv.open) fillQuickView(); });

  renderCart();
})();
