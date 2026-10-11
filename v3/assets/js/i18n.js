/* =====================================================
   Drakono valtys v3 – LT / EN vertimai (demo)
   LT tekstas yra HTML'e, EN – žemiau. WordPress'e: Polylang / WPML.
   ===================================================== */
window.DV_I18N = (function () {
  'use strict';
  var dict = {
    lt: {
      'err.required': 'Užpildykite privalomus laukus', 'err.email': 'Įveskite teisingą el. pašto adresą',
      'err.consent': 'Pažymėkite sutikimą', 'cart.remove': 'Pašalinti', 'cart.voucher': 'Kupono vertė',
      'cart.anydate': 'Data derinama', 'cart.for': 'Kam:'
    },
    en: {
      'meta.title': 'Dragon Boats – experience shop | Team building, celebrations and dragon boat paddling',
      'meta.desc': 'Pick an experience like in a shop: team paddle, team vs team race, stag parties, training and gift vouchers. Add to cart – and get an offer within 24 hours.',
      'a11y.skip': 'Skip to content',
      'top.1': 'We reply within 24 hours', 'top.2': 'Free date change', 'top.3': 'Invoices for companies',
      'hd.search': 'Search experiences: team building, stag party, training...', 'hd.help': 'Help', 'hd.contacts': 'Contacts', 'hd.cart': 'Cart',
      'nav.all': 'All experiences', 'nav.team': 'Team building', 'nav.party': 'Stag, hen & parties', 'nav.leisure': 'Leisure',
      'nav.training': 'Training', 'nav.gift': 'Gift vouchers', 'nav.blog': 'News', 'nav.season': 'Season: May – October · Vilnius', 'nav.menu': 'Menu',
      'hero.s1.tag': 'Season hit', 'hero.s1.title': 'Team paddle in a dragon boat', 'hero.s1.text': '20 people, one boat, one rhythm. Team building everyone will remember.', 'hero.s1.cta': 'Browse experiences',
      'pk.from': 'from',
      'hero.s2.tag': 'For celebrations', 'hero.s2.title': 'Stag or hen party on the water', 'hero.s2.text': "Adrenaline, laughter and photos you won't be embarrassed to share.", 'hero.s2.cta': 'Plan a party',
      'hero.s3.tag': '-10 % before the season', 'hero.s3.title': 'Team vs team race', 'hero.s3.text': 'Two boats, two captains and a final with medals. Early booking discount.', 'hero.s3.cta': 'See the offer',
      'promo.1.tag': 'Gift', 'promo.1.title': 'Gift voucher', 'promo.1.text': 'An adventure instead of a thing – from €50',
      'promo.2.title': 'Team vs team race', 'promo.2.text': 'Early booking discount',
      'feat.1.t': 'We reply within 24 hours', 'feat.1.s': 'Offer with time and price', 'feat.2.t': 'Free date change', 'feat.2.s': 'In a storm we reschedule',
      'feat.3.t': 'Safety included', 'feat.3.s': 'Life jackets, briefing, captain', 'feat.4.t': 'Invoices for companies', 'feat.4.s': 'Payment after the event',
      'cat.title': 'Choose by occasion', 'cat.all': 'All experiences', 'cat.1': 'Team building', 'cat.2': 'Celebrations', 'cat.3': 'Leisure', 'cat.4': 'Training', 'cat.5': 'Gift vouchers',
      'cat.items': 'experiences', 'cat.item1': 'experience',
      'prod.title': 'Experience catalogue', 'f.all': 'All', 'f.team': 'Team building', 'f.party': 'Celebrations', 'f.leisure': 'Leisure', 'f.training': 'Training', 'f.gift': 'Vouchers',
      'sort.pop': 'Most popular', 'sort.asc': 'Price: low to high', 'sort.desc': 'Price: high to low',
      'badge.hit': 'Hit', 'badge.new': 'New', 'badge.gift': 'Gift', 'prod.quick': 'Quick view', 'prod.add': 'Book', 'prod.buy': 'Buy', 'prod.empty': 'No experiences match this filter.',
      'unit.boat': '/ boat', 'unit.boats2': '/ 2 boats', 'unit.person': '/ person',
      'p.team.name': 'Team paddle', 'p.team.meta': 'up to 20 people · 1.5 h · with captain', 'p.team.l1': 'Captain and drummer', 'p.team.l2': 'Briefing on shore', 'p.team.l3': 'Training + mini race', 'p.team.l4': 'Photos from the shore',
      'p.race.name': 'Team vs team race', 'p.race.meta': '20–40 people · 2 h · 2 boats', 'p.race.l1': '2 boats and 2 captains', 'p.race.l2': 'Race format with a final', 'p.race.l3': 'Medals for the winners', 'p.race.l4': 'Ideal for large companies',
      'p.stag.name': 'Stag party on the water', 'p.stag.meta': '8–20 people · 2 h · with a scenario', 'p.stag.l1': 'Groom takes the drum', 'p.stag.l2': "Race against your friends' team", 'p.stag.l3': 'Photo and video', 'p.stag.l4': 'Champagne on shore',
      'p.hen.name': 'Hen party on the water', 'p.hen.meta': '8–20 people · 2 h · with a scenario', 'p.hen.l1': 'Bride takes the drum', 'p.hen.l2': 'Themed challenges in the boat', 'p.hen.l3': 'Photo and video', 'p.hen.l4': 'Picnic on shore',
      'p.family.name': 'Friends & family paddle', 'p.family.meta': '6–20 people · 1.5 h · ages 7+', 'p.family.l1': 'Captain and briefing', 'p.family.l2': 'Life jackets for everyone', 'p.family.l3': 'Games on the water', 'p.family.l4': 'Suitable for children from 7',
      'p.open.name': 'Open paddling session', 'p.open.meta': '1–10 people · 1 h · join a group', 'p.open.l1': 'Every other week, evenings', 'p.open.l2': 'Join other participants', 'p.open.l3': 'Briefing included', 'p.open.l4': 'Life jacket and paddle on site',
      'p.training.name': 'Training with a coach', 'p.training.meta': '1–10 people · 1 h · technique and rhythm', 'p.training.l1': 'Technique, rhythm, endurance', 'p.training.l2': 'Individually or in a small group', 'p.training.l3': 'Preparation for competitions', 'p.training.l4': 'Regular training sessions',
      'p.gift.name': 'Gift voucher', 'p.gift.meta': 'valid 12 months · any experience', 'p.gift.l1': 'Valid for 12 months', 'p.gift.l2': 'Electronic or printed', 'p.gift.l3': 'Any experience from the catalogue', 'p.gift.l4': 'Sent within 1 hour',
      'deal.kicker': 'Early booking offer', 'deal.title': '-10 % on all team vs team races', 'deal.text': 'Reserve a date before the offer ends – the discount is applied in your offer, no payment now.', 'deal.cta': 'See the offer',
      'cd.d': 'days', 'cd.h': 'hours', 'cd.m': 'min', 'cd.s': 'sec',
      'feat.cat': 'Deal of the week · Team building', 'feat.reviews': 'reviews', 'feat.text': 'Two boats, two captains and a race format with a final – a duel of departments, teams or groups of friends on the water.',
      'feat.l4': 'Photographer on the shore', 'qv.date': 'Date', 'qv.people': 'Participants', 'qv.time': 'Time of day',
      'time.any': 'Any', 'time.morning': 'Morning', 'time.day': 'Daytime', 'time.evening': 'Evening', 'qv.add': 'Add to cart', 'qv.now': 'Book now',
      'meta.cat': 'Category', 'meta.dur': 'Duration', 'meta.loc': 'Location', 'meta.people': 'Participants', 'feat.dur': '2 h', 'feat.loc': 'Vilnius, Neris (or we come to you)',
      'tab.1': 'Description', 'tab.2': "What's included", 'tab.3': 'Booking terms',
      'tab.1.text': 'Two dragon boats start at the same time – a 500 m course, 3 heats and a final. Before the start – a 15-minute briefing and warm-up. After the finish – medals, photos and a group team photo.',
      'tab.2.text': '2 captain-instructors, life jackets and paddles for everyone, briefing, race officiating, medals for the winners and a photographer on the shore. A picnic, trophies and transport can be added.',
      'tab.3.text': 'The enquiry is non-binding. Once the offer is confirmed – an invoice for companies (payment after the event) or a 30 % deposit for private groups. In a storm or strong wind the date is moved free of charge.',
      'rev.title': 'Customer reviews', 'rev.count': 'based on 128 reviews',
      'rev.1.q': 'In two hours we saw who really knows how to listen and how to lead. The best team day of the year.', 'rev.1.who': 'Head of HR, IT company', 'rev.1.p': 'Team paddle',
      'rev.2.q': 'A stag party nobody expected. The groom on the drum – a legend. The photos are still going round the group chat.', 'rev.2.who': 'Best man', 'rev.2.p': 'Stag party on the water',
      'rev.3.q': 'We were 36 people, two boats, racing to the finish. Everything organised down to the detail, they replied within an hour.', 'rev.3.who': 'Event coordinator', 'rev.3.p': 'Team vs team race',
      'rev.4.q': 'Open sessions are the best workout of the week. Our whole sports club comes back every other week.', 'rev.4.who': 'Sports club member', 'rev.4.p': 'Open paddling session',
      'gift.card.label': 'Gift voucher', 'gift.card.text': 'For a dragon boat paddle with a captain', 'gift.card.valid': 'Valid until 2027-10-09',
      'gift.kicker': 'Gift vouchers', 'gift.title': 'Give an adventure, not a thing', 'gift.text': 'The voucher is valid for 12 months for any experience in the catalogue – the recipient picks the date and gathers the team.',
      'gift.l1': 'E-voucher within 1 hour', 'gift.l2': 'Value from €50 up to a full package', 'gift.l3': 'Add a personal message', 'gift.cta': 'Buy a voucher',
      'about.kicker': 'Your captain', 'about.title': 'Saulius – dragon boat coach and boat captain',
      'about.text': 'A long-time dragon boat coach and organiser of the Dragon Boat Festival. Every experience in the catalogue runs with a captain in the boat, certified equipment and life jackets for everyone.',
      'about.s1': 'years on the water', 'about.s2': 'teams have tried it', 'about.s3': 'paddlers in one boat', 'about.fb': 'Dragon Boat Festival on Facebook',
      'blog.title': 'News and tips', 'blog.all': 'All news', 'blog.read': 'Read',
      'blog.1.cat': 'Events', 'blog.1.title': 'Dragon Boat Festival 2026: registration is open', 'blog.1.text': 'Corporate team races on the Neris – how to gather a team and what to know before the start.',
      'blog.2.cat': 'Tips', 'blog.2.title': '5 reasons why team building on the water works', 'blog.2.text': 'Synchronised paddling as a teamwork lesson – what managers notice after a paddle.',
      'blog.3.cat': 'Tips', 'blog.3.title': 'What to wear for a dragon boat paddle?', 'blog.3.text': 'A short list: what gets wet, what to bring and what we provide.',
      'ig.title': 'Follow us',
      'nl.title': 'Get season offers', 'nl.text': 'Early booking discounts and open session dates – once a month, no spam.', 'nl.ph': 'Your email', 'nl.cta': 'Subscribe', 'nl.ok': 'Thank you! Check your inbox.',
      'ft.desc': 'Experience shop: dragon boat paddling for groups with a captain. Team building, celebrations, training, gift vouchers.',
      'ft.addr': 'Vilnius, Neris embankment · Mon–Sun 9:00–20:00', 'ft.exp': 'Experiences', 'ft.info': 'Information',
      'ft.i1': 'Booking terms', 'ft.i2': 'Date changes and weather', 'ft.i3': 'Safety and briefing', 'ft.i4': 'Privacy policy', 'ft.i5': 'FAQ',
      'ft.help': 'Help', 'ft.h1': 'Need experience? No – a 15-minute briefing.', 'ft.h2': 'What if it rains? We reschedule for free.', 'ft.h3': "Can't swim? Life jackets for everyone.",
      'ft.copy': '© 2026 Dragon Boats. Demo version. Photos: Pexels.', 'pay.1': 'Bank transfer', 'pay.2': 'Invoice',
      'bb.catalog': 'Catalogue', 'bb.call': 'Call',
      'cart.title': 'Booking cart', 'cart.empty': 'Your cart is empty. Pick an experience in the catalogue – date and participants are set when booking.',
      'cart.total': 'Estimated total', 'cart.note': "We'll confirm the final price in an offer within 24 hours. No payment now.", 'cart.checkout': 'Send enquiry', 'cart.more': 'Add another experience',
      'qv.amount': 'Voucher value', 'qv.to': 'For whom (optional)', 'qv.to.ph': 'Name', 'qv.est': 'Estimated price',
      'co.title': 'Enquiry details', 'co.sub': 'Like a shop checkout – just without payment. We send an offer within 24 hours.',
      'co.name': 'Full name *', 'co.company': 'Company (optional)', 'co.phone': 'Phone *', 'co.email': 'Email *', 'co.location': 'Location',
      'loc.vilnius': 'Vilnius (Neris river)', 'loc.trakai': 'Trakai (Lake Galvė)', 'loc.kaunas': 'Kaunas (Lampėdžiai)', 'loc.other': 'Other location – we come to you',
      'co.message': 'Notes', 'co.message.ph': 'Occasion, wishes, a more exact time...', 'co.consent': 'I agree that my data will be used to respond to this enquiry.',
      'co.submit': 'Send enquiry', 'co.summary': 'Your order', 'co.t1': 'We reply within 24 hours', 'co.t2': 'No payment now', 'co.t3': 'The date can be changed for free',
      'co.ok.title': 'Enquiry received!', 'co.ok.text': 'Order no.', 'co.ok.sub': "Within 24 hours we'll email an offer with the exact price, time and place.", 'co.ok.back': 'Back to the catalogue',
      'err.required': 'Please fill in the required fields', 'err.email': 'Please enter a valid email address', 'err.consent': 'Please tick the consent box',
      'cart.remove': 'Remove', 'cart.voucher': 'Voucher value', 'cart.anydate': 'Date to be agreed', 'cart.for': 'For:'
    }
  };

  var lang = 'lt', cache = new WeakMap();
  var ATTRS = [
    { sel: '[data-i18n]', attr: 'data-i18n', prop: 'text' },
    { sel: '[data-i18n-placeholder]', attr: 'data-i18n-placeholder', prop: 'placeholder' },
    { sel: '[data-i18n-content]', attr: 'data-i18n-content', prop: 'content' }
  ];
  function swap(el, attr, prop) {
    var key = el.getAttribute(attr), store = cache.get(el);
    if (!store) { store = {}; cache.set(el, store); }
    if (!(prop in store)) store[prop] = prop === 'text' ? el.textContent : el.getAttribute(prop);
    var val = lang === 'lt' ? store[prop] : (dict[lang] && dict[lang][key]) || store[prop];
    if (prop === 'text') el.textContent = val; else el.setAttribute(prop, val);
  }
  function apply(l) {
    if (!dict[l]) l = 'lt';
    lang = l;
    document.documentElement.lang = l; document.documentElement.setAttribute('data-lang', l);
    ATTRS.forEach(function (a) { document.querySelectorAll(a.sel).forEach(function (el) { swap(el, a.attr, a.prop); }); });
    document.querySelectorAll('[data-set-lang]').forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-set-lang') === l); });
    try { localStorage.setItem('dv-lang', l); } catch (e) {}
    document.dispatchEvent(new CustomEvent('dv:langchange', { detail: { lang: l } }));
  }
  function t(key) { var d = dict[lang] || {}; return d[key] || dict.lt[key] || key; }
  function pluralLt(n, forms) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return forms[0];
    if (m10 >= 2 && m10 <= 9 && !(m100 >= 11 && m100 <= 19)) return forms[1];
    return forms[2];
  }
  function peopleLabel(n) { return lang === 'lt' ? n + ' ' + pluralLt(n, ['dalyvis', 'dalyviai', 'dalyvių']) : n + (n === 1 ? ' participant' : ' participants'); }
  function boatsLabel(n) { return lang === 'lt' ? n + ' ' + pluralLt(n, ['valtis', 'valtys', 'valčių']) : n + (n === 1 ? ' boat' : ' boats'); }
  function sizeLabel(n, boats) { return peopleLabel(n) + ' · ' + boatsLabel(boats); }
  function init() {
    var initial = 'lt', q = new URLSearchParams(location.search).get('lang');
    if (q && dict[q]) initial = q;
    else { try { var s = localStorage.getItem('dv-lang'); if (s && dict[s]) initial = s; } catch (e) {} }
    document.querySelectorAll('[data-set-lang]').forEach(function (b) { b.addEventListener('click', function () { apply(b.getAttribute('data-set-lang')); }); });
    apply(initial);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  return { apply: apply, t: t, sizeLabel: sizeLabel, peopleLabel: peopleLabel, boatsLabel: boatsLabel, lang: function () { return lang; }, dict: dict };
})();
