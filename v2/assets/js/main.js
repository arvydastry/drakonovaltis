/* =====================================================
   Drakono valtys – sąveika (demo)
   Parallax, reveal, tilt, counters, galerija, forma
   ===================================================== */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var I18N = window.DV_I18N;

  /* ---------- Header ---------- */
  var header = $('#header');
  function onScrollHeader() { header.classList.toggle('is-scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  var burger = $('#burger');
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('#nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Aktyvi nuoroda meniu ---------- */
  var navLinks = $$('#nav a[href^="#"]');
  var sectionById = {};
  navLinks.forEach(function (a) {
    var sec = document.getElementById(a.getAttribute('href').slice(1));
    if (sec) sectionById[sec.id] = a;
  });
  if ('IntersectionObserver' in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove('is-active'); });
          sectionById[e.target.id].classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(sectionById).forEach(function (id) { navIo.observe(document.getElementById(id)); });
  }

  /* ---------- Parallax ---------- */
  var pxEls = $$('[data-parallax]');
  var canParallax = !reduceMotion && window.matchMedia('(min-width: 768px)').matches;
  function parallax() {
    if (!canParallax) return;
    var vh = window.innerHeight;
    pxEls.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
      var center = r.top + r.height / 2 - vh / 2;
      el.style.transform = 'translate3d(0,' + (center * speed).toFixed(1) + 'px,0)';
    });
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(function () { parallax(); ticking = false; }); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', parallax);
  parallax();

  /* ---------- Reveal on scroll ---------- */
  var revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Skaitikliai ---------- */
  function formatNum(n, dec) {
    var s = n.toFixed(dec);
    return I18N.lang() === 'lt' ? s.replace('.', ',') : s;
  }
  function animateCounter(el) {
    var to = parseFloat(el.getAttribute('data-to'));
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var suffix = el.getAttribute('data-suffix') || '';
    el.setAttribute('data-done', '1');
    if (reduceMotion) { el.textContent = formatNum(to, dec) + suffix; return; }
    var dur = 1800, t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatNum(to * eased, dec) + suffix;
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  var counters = $$('.counter');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { animateCounter(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else { counters.forEach(animateCounter); }
  document.addEventListener('dv:langchange', function () {
    counters.forEach(function (el) {
      if (el.getAttribute('data-done')) {
        el.textContent = formatNum(parseFloat(el.getAttribute('data-to')), parseInt(el.getAttribute('data-decimals') || '0', 10)) + (el.getAttribute('data-suffix') || '');
      }
    });
  });

  /* ---------- 3D tilt + magnetiniai mygtukai ---------- */
  if (!reduceMotion && canHover) {
    $$('.tilt').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg');
        card.style.setProperty('--ry', (x * 7).toFixed(2) + 'deg');
        card.style.setProperty('--mx', (x * 100 + 50).toFixed(1) + '%');
        card.style.setProperty('--my', (y * 100 + 50).toFixed(1) + '%');
      });
      card.addEventListener('pointerleave', function () {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });
    $$('.magnetic').forEach(function (btn) {
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - (r.left + r.width / 2);
        var y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = 'translate(' + (x * 0.22).toFixed(1) + 'px,' + (y * 0.22).toFixed(1) + 'px)';
      });
      btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    });
  }

  /* ---------- Galerija (lightbox) ---------- */
  var lb = $('#lightbox'), lbImg = $('#lightboxImg');
  if (lb && typeof lb.showModal === 'function') {
    $$('.g-item').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        lbImg.src = a.getAttribute('href');
        lbImg.alt = a.querySelector('img').alt;
        lb.showModal();
      });
    });
    $('#lightboxClose').addEventListener('click', function () { lb.close(); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener('close', function () { lbImg.src = ''; });
  }

  /* ---------- Mobilus CTA mygtukas ---------- */
  var fab = $('#fab'), booking = $('#uzsakymas');
  if (fab && booking && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      fab.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(booking);
  }

  /* ---------- Užklausos forma ---------- */
  var form = $('#bookingForm');
  if (!form) return;
  var steps = $$('.step', form);
  var indicators = $$('.steps li', form);
  var prevBtn = $('#prevBtn'), nextBtn = $('#nextBtn'), submitBtn = $('#submitBtn');
  var errorBox = $('#formError');
  var size = $('#groupSize'), sizeOut = $('#groupSizeOut');
  var pkgField = $('#packageField'), pkgNote = $('#packageNote'), pkgName = $('#packageName');
  var current = 0;

  function showStep(i) {
    current = i;
    steps.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
    indicators.forEach(function (li, k) {
      li.classList.toggle('is-active', k === i);
      li.classList.toggle('is-done', k < i);
    });
    prevBtn.hidden = i === 0;
    nextBtn.hidden = i === steps.length - 1;
    submitBtn.hidden = i !== steps.length - 1;
    errorBox.hidden = true;
  }
  function showError(msg) { errorBox.textContent = msg; errorBox.hidden = false; }
  function validate(i) {
    var step = steps[i];
    if (i === 0) return form.querySelector('input[name="type"]:checked') ? null : I18N.t('form.err.type');
    var fields = $$('[required]', step);
    for (var k = 0; k < fields.length; k++) {
      var f = fields[k];
      var empty = f.type === 'checkbox' ? !f.checked : !f.value.trim();
      if (empty) { f.focus(); return I18N.t('form.err.required'); }
      if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value)) { f.focus(); return I18N.t('form.err.email'); }
    }
    return null;
  }
  nextBtn.addEventListener('click', function () {
    var err = validate(current);
    if (err) { showError(err); return; }
    showStep(current + 1);
    form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  });
  prevBtn.addEventListener('click', function () { showStep(current - 1); });

  /* Dalyvių slankiklis */
  function updateSize() {
    var n = parseInt(size.value, 10);
    var boats = Math.max(1, Math.ceil(n / 20));
    sizeOut.textContent = I18N.sizeLabel(n, boats);
    size.style.setProperty('--p', ((n - size.min) / (size.max - size.min) * 100).toFixed(1) + '%');
  }
  size.addEventListener('input', updateSize);
  updateSize();

  /* Paketo pavadinimas pagal data-i18n raktą (veikia abiem kalbom) */
  function resolveKey(key) {
    var el = document.querySelector('[data-i18n="' + key + '"]');
    return el ? el.textContent.trim() : key;
  }
  function renderPackage() {
    var key = pkgNote.getAttribute('data-key');
    if (!key) return;
    pkgName.textContent = resolveKey(key);
    pkgField.value = pkgName.textContent;
  }
  document.addEventListener('dv:langchange', function () { renderPackage(); updateSize(); });

  /* Mygtukai „Užsakyti…“ iš sekcijų – užpildo formą iš anksto */
  $$('[data-prefill]').forEach(function (a) {
    a.addEventListener('click', function () {
      var type = a.getAttribute('data-prefill');
      var input = form.querySelector('input[name="type"][value="' + type + '"]');
      if (input) input.checked = true;
      var pkg = a.getAttribute('data-package');
      if (pkg) { pkgNote.setAttribute('data-key', pkg); pkgNote.hidden = false; renderPackage(); }
      else { pkgNote.removeAttribute('data-key'); pkgNote.hidden = true; pkgField.value = ''; }
      if (form.classList.contains('is-sent')) resetForm();
      showStep(0);
    });
  });

  /* Siuntimas (demo – be serverio; WordPress'e čia bus formos įskiepis) */
  function selectedText(sel) { return sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].textContent : ''; }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var err = validate(current);
    if (err) { showError(err); return; }
    var checkedType = form.querySelector('input[name="type"]:checked');
    var extras = $$('input[name="extras"]:checked', form).map(function (c) { return c.nextElementSibling.textContent; });
    var rows = [
      ['sum.type', checkedType ? checkedType.nextElementSibling.querySelector('.rc-title').textContent : ''],
      ['sum.package', pkgField.value],
      ['sum.date', $('#date').value],
      ['sum.time', selectedText($('#time'))],
      ['sum.size', sizeOut.textContent],
      ['sum.location', selectedText($('#location'))],
      ['sum.extras', extras.join(', ')],
      ['sum.name', $('#name').value],
      ['sum.company', $('#company').value],
      ['sum.phone', $('#phone').value],
      ['sum.email', $('#email').value],
      ['sum.message', $('#message').value]
    ];
    var dl = $('#summaryList');
    dl.innerHTML = '';
    rows.forEach(function (r) {
      if (!r[1]) return;
      var dt = document.createElement('dt'); dt.textContent = I18N.t(r[0]);
      var dd = document.createElement('dd'); dd.textContent = r[1];
      dl.appendChild(dt); dl.appendChild(dd);
    });
    /* Demo: duomenys tik konsolėje. WP: Contact Form 7 / WPForms / Fluent Forms */
    var payload = {};
    new FormData(form).forEach(function (v, k) { payload[k] = payload[k] ? payload[k] + ', ' + v : v; });
    if (window.console) console.log('[DEMO] Užklausa:', payload);
    form.classList.add('is-sent');
    $('#formSuccess').hidden = false;
    form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  });

  function resetForm() {
    form.reset();
    form.classList.remove('is-sent');
    $('#formSuccess').hidden = true;
    pkgNote.hidden = true; pkgNote.removeAttribute('data-key'); pkgField.value = '';
    updateSize();
    showStep(0);
  }
  $('#resetForm').addEventListener('click', resetForm);

  /* Minimali data – šiandien */
  var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  $('#date').min = today.toISOString().slice(0, 10);

  showStep(0);
})();
