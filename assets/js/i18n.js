/* =====================================================
   Drakono valtys – LT / EN vertimai (demo)
   LT tekstas yra HTML'e (numatytoji kalba).
   EN tekstas – žemiau. Perjungiant kalbą elementų
   tekstas keičiamas pagal data-i18n raktą.
   WordPress versijoje tai pakeis Polylang / WPML.
   ===================================================== */
window.DV_I18N = (function () {
  'use strict';

  var dict = {
    /* Tik JS naudojami LT tekstai (formos klaidos, santrauka) */
    lt: {
      'form.err.type': 'Pasirinkite renginio tipą',
      'form.err.required': 'Užpildykite privalomus laukus',
      'form.err.email': 'Įveskite teisingą el. pašto adresą',
      'sum.type': 'Renginys', 'sum.package': 'Paketas', 'sum.date': 'Data', 'sum.time': 'Paros metas',
      'sum.size': 'Dalyviai', 'sum.location': 'Vieta', 'sum.extras': 'Papildomai', 'sum.name': 'Vardas',
      'sum.company': 'Įmonė', 'sum.phone': 'Telefonas', 'sum.email': 'El. paštas', 'sum.message': 'Žinutė'
    },

    en: {
      'meta.title': 'Dragon Boats – dragon boat paddling for groups with a captain | Team building, stag & hen parties, leisure',
      'meta.desc': 'A unique 20-seat dragon boat experience with a captain. Corporate team building, stag and hen parties, leisure for friends and families. Request an offer in 2 minutes.',
      'a11y.skip': 'Skip to content',

      'nav.who': "Who it's for", 'nav.how': 'How it works', 'nav.packages': 'Packages', 'nav.gallery': 'Gallery',
      'nav.faq': 'FAQ', 'nav.contacts': 'Contacts', 'nav.cta': 'Book a session',

      'hero.eyebrow': 'Dragon boat · Vilnius & all of Lithuania · May – October',
      'hero.t1': 'One boat.', 'hero.t2': 'One team.', 'hero.t3': 'One rhythm.',
      'hero.sub': 'A unique 20-seat dragon boat experience with a captain – for corporate team building, stag and hen parties and days out with friends. No experience needed – just the will to paddle together.',
      'hero.cta1': 'Book a session', 'hero.cta2': 'How it works',
      'hero.chip1': 'Up to 20 people per boat', 'hero.chip2': 'Captain and briefing included',
      'hero.chip3': '1.5–2 hours of adventure', 'hero.chip4': 'Life jackets and safety included',
      'hero.card.label': 'Most popular choice', 'hero.card.title': 'Team paddle',
      'hero.card.meta': 'up to 20 people · 1.5 h · with captain', 'hero.card.price': 'from €290 / boat',

      'mq.1': 'Corporate team building', 'mq.2': 'Stag parties', 'mq.3': 'Hen parties', 'mq.4': 'Birthdays',
      'mq.5': 'Days out with friends', 'mq.6': 'Sports clubs', 'mq.7': 'Student events', 'mq.8': 'Family celebrations',

      'aud.kicker': "Who it's for", 'aud.title': 'Three reasons to get in one boat',
      'aud.intro': 'A dragon boat only moves when everyone paddles to the same rhythm. That makes it the best way to unite colleagues, friends or family – no preparation and no slides.',
      'aud.1.tag': 'For companies', 'aud.1.title': 'Team building everyone will remember',
      'aud.1.text': 'Synchronised paddling is a teamwork lesson without the theory. The captain leads, the drum sets the rhythm, and the whole team feels the result instantly.',
      'aud.1.li1': 'From 10 to 100+ participants (several boats)', 'aud.1.li2': 'Races between departments or teams',
      'aud.1.li3': 'Combine with a picnic or a workshop', 'aud.1.cta': 'Book for your team',
      'aud.2.tag': 'For celebrations', 'aud.2.title': 'A stag or hen party on the water',
      'aud.2.text': "Adrenaline, laughter and photos you won't be embarrassed to share. Getting wet is allowed, getting bored is not.",
      'aud.2.li1': 'Groom or bride takes the drum', 'aud.2.li2': "Race against your friends' team",
      'aud.2.li3': 'Photo / video and champagne on shore', 'aud.2.cta': 'Plan a party',
      'aud.3.tag': 'For friends & families', 'aud.3.title': 'Leisure that gets you moving',
      'aud.3.text': 'Birthdays, class reunions, sports club outings or simply a different kind of Sunday afternoon – the dragon boat suits everyone aged 7 and up.',
      'aud.3.li1': 'Children from 7 together with adults', 'aud.3.li2': 'Duration adapted to your group',
      'aud.3.li3': 'Join open paddling sessions', 'aud.3.cta': 'Book for leisure',

      'steps.kicker': 'How it works', 'steps.title': 'From enquiry to finish line – 4 steps',
      'steps.1.title': 'Enquiry', 'steps.1.text': 'Fill in the form in 2 minutes: event type, date, number of people and your wishes.',
      'steps.2.title': 'Offer', 'steps.2.text': 'Within 24 hours you receive an offer with time, place and price. Confirm – and the date is yours.',
      'steps.3.title': 'Briefing', 'steps.3.text': 'On shore the captain hands out life jackets and paddles and teaches the basic stroke in 15 minutes.',
      'steps.4.title': 'Paddling', 'steps.4.text': '1.5–2 hours on the water: training, games, races and a finish with awards.',

      'stats.title': 'The dragon boat in numbers',
      'stats.1': 'paddlers in one boat', 'stats.2': 'metres – boat length',
      'stats.3': 'teams have already tried it', 'stats.4': 'of first-timers reach the finish',

      'pk.kicker': 'Packages', 'pk.title': 'Choose your paddle',
      'pk.intro': 'Every package includes: captain-instructor, life jackets, paddles and a briefing. Prices are indicative – the exact price comes with your offer.',
      'pk.badge': 'Most popular', 'pk.from': 'from', 'pk.cta': 'Book this package',
      'pk.1.title': 'Team paddle', 'pk.1.meta': 'up to 20 people · 1.5 h', 'pk.1.unit': '/ boat',
      'pk.1.li1': 'Captain and drummer', 'pk.1.li2': 'Briefing on shore', 'pk.1.li3': 'Training + mini race', 'pk.1.li4': 'Photos from the shore',
      'pk.2.title': 'Team vs team race', 'pk.2.meta': '20–40 people · 2 h', 'pk.2.unit': '/ 2 boats',
      'pk.2.li1': '2 boats and 2 captains', 'pk.2.li2': 'Race format with a final', 'pk.2.li3': 'Medals for the winners', 'pk.2.li4': 'Ideal for large companies',
      'pk.3.title': 'Training with a coach', 'pk.3.meta': '1–10 people · 1 h', 'pk.3.unit': '/ person',
      'pk.3.li1': 'Technique, rhythm, endurance', 'pk.3.li2': 'Individually or in a small group', 'pk.3.li3': 'Preparation for competitions', 'pk.3.li4': 'Regular training sessions',
      'pk.4.title': 'Celebration package', 'pk.4.meta': 'stag & hen parties, birthdays', 'pk.4.price': 'Price on request',
      'pk.4.li1': 'Themed scenario', 'pk.4.li2': 'Photo / video in the boat', 'pk.4.li3': 'Picnic or bonfire after paddling', 'pk.4.li4': 'Music and drum challenges',

      'gal.kicker': 'Gallery', 'gal.title': 'Moments from the water',
      'gal.1': 'Race start', 'gal.2': 'Boats waiting for teams', 'gal.3': 'The home straight', 'gal.4': 'Dock before the start',
      'gal.5': 'Evening paddle', 'gal.6': 'Team races', 'gal.7': 'One rhythm', 'gal.8': 'Our fleet',
      'gal.note': "Pexels photos in the demo version. The final website will feature your teams' own moments.",

      'cap.badge': 'years on the water', 'cap.kicker': 'Your captain',
      'cap.title': 'Saulius – dragon boat coach and boat captain',
      'cap.p1': 'A long-time dragon boat coach and organiser of the Dragon Boat Festival. Saulius turns every group – from colleagues holding a paddle for the first time to athletes – into a team within 15 minutes.',
      'cap.p2': 'Sessions run with certified equipment, every participant gets a life jacket, and the captain is always in the boat – from the first stroke to the last.',
      'cap.f1.t': 'Certified coach', 'cap.f1.s': 'Dragon boat and rowing training',
      'cap.f2.t': 'Safety first', 'cap.f2.s': 'Briefing, life jackets, accompanying captain',
      'cap.f3.t': 'Festival organiser', 'cap.f3.s': 'The Dragon Boat Festival community',
      'cap.fb': 'Follow on Facebook – Dragon Boat Festival',

      'tm.kicker': 'Testimonials', 'tm.title': 'What teams say',
      'tm.1.q': '“In two hours we saw who really knows how to listen and how to lead. The best team day of the year.”',
      'tm.1.who': 'Head of HR, IT company',
      'tm.2.q': '“A stag party nobody expected. The groom on the drum – a legend. The photos are still going round the group chat.”',
      'tm.2.who': 'Best man',
      'tm.3.q': '“We were 36 people, two boats, racing to the finish. Everything organised down to the detail, they replied within an hour.”',
      'tm.3.who': 'Event coordinator',

      'faq.kicker': 'FAQ', 'faq.title': 'Frequently asked questions',
      'faq.intro': "Didn't find an answer? Add it to your enquiry – we reply within 24 hours.", 'faq.cta': 'Ask a question',
      'faq.1.q': 'Do I need to know how to paddle?',
      'faq.1.a': 'No. The captain teaches the basic stroke in a 15-minute briefing, and there is always a drummer in the boat setting the rhythm. After 10 minutes on the water everyone paddles together.',
      'faq.2.q': 'How many people fit in a boat?',
      'faq.2.a': 'A standard dragon boat seats 20 paddlers, a drummer and a steersperson. Larger groups get several boats and races between them.',
      'faq.3.q': "Is it safe if I can't swim?",
      'faq.3.a': 'Yes. Every participant gets a life jacket, the dragon boat is very stable, and the captain is always in the boat.',
      'faq.4.q': 'What if it rains?',
      'faq.4.a': "Light rain doesn't stop a paddle – it's often more fun. In case of a storm or strong wind we reschedule free of charge.",
      'faq.5.q': 'Where do the sessions take place?',
      'faq.5.a': 'The main location is Vilnius, the Neris river. By arrangement we also come to other Lithuanian lakes and rivers – we bring the boat.',
      'faq.6.q': 'What should I bring?',
      'faq.6.a': 'Sports clothes that can get wet, a change of clothes and a good mood. Life jackets, paddles and the captain are on us.',
      'faq.7.q': 'How does payment work?',
      'faq.7.a': 'The enquiry is non-binding. Once the offer is confirmed, companies receive an invoice; private groups pay by bank transfer or on site.',

      'bk.kicker': 'Booking', 'bk.title': 'Enquiry for a session',
      'bk.intro': "Fill in the form in 2 minutes – within 24 hours we'll send an offer with time, place and price. The enquiry is non-binding.",
      'bk.li1': 'We reply within 24 hours', 'bk.li2': 'No upfront fee for the enquiry', 'bk.li3': 'The date can be changed free of charge',
      'bk.s1': 'Event', 'bk.s2': 'Details', 'bk.s3': 'Contacts', 'bk.pkgnote': 'Selected package:',
      'bk.q1': 'What kind of event is it?',
      'bk.t.teambuilding': 'Corporate team building', 'bk.t.teambuilding.s': 'For a team of colleagues',
      'bk.t.bachelor': 'Stag / hen party', 'bk.t.bachelor.s': 'A celebration on the water',
      'bk.t.leisure': 'Leisure with friends or family', 'bk.t.leisure.s': 'Birthdays, days out',
      'bk.t.training': 'Training with a coach', 'bk.t.training.s': 'Technique and rhythm',
      'bk.t.race': 'Team vs team race', 'bk.t.race.s': '2 or more boats',
      'bk.q2': 'When, and how many of you?', 'bk.date': 'Preferred date', 'bk.time': 'Time of day',
      'bk.time.any': 'Any', 'bk.time.morning': 'Morning (9–12)', 'bk.time.day': 'Daytime (12–16)', 'bk.time.evening': 'Evening (16–20)',
      'bk.size': 'Number of participants', 'bk.location': 'Location',
      'bk.loc.vilnius': 'Vilnius (Neris river)', 'bk.loc.trakai': 'Trakai (Lake Galvė)', 'bk.loc.kaunas': 'Kaunas (Lampėdžiai)',
      'bk.loc.other': 'Other location – we come to you', 'bk.extras': 'Extras (optional)',
      'bk.ex.photo': 'Photos and video', 'bk.ex.race': 'Race with medals', 'bk.ex.picnic': 'Picnic / bonfire after paddling', 'bk.ex.transport': 'Transport to the location',
      'bk.q3': 'Where should we send the offer?', 'bk.name': 'Full name *', 'bk.company': 'Company (optional)',
      'bk.phone': 'Phone *', 'bk.email': 'Email *', 'bk.message': 'Message',
      'bk.message.ph': 'Tell us about the occasion, your wishes, a more exact time...',
      'bk.consent': 'I agree that my data will be used to respond to this enquiry.',
      'bk.back': 'Back', 'bk.next': 'Next', 'bk.submit': 'Send enquiry',
      'bk.ok.title': 'Thank you! Enquiry received.',
      'bk.ok.text': "Within 24 hours we'll contact you by email or phone with an offer. Your enquiry summary:",
      'bk.ok.again': 'New enquiry',

      'ft.desc': 'Dragon boat sessions for groups with a captain. Team building, celebrations, training – in Vilnius and all over Lithuania.',
      'ft.nav': 'Navigation', 'ft.contacts': 'Contacts', 'ft.addr': 'Vilnius, Neris embankment', 'ft.follow': 'Follow',
      'ft.ig': 'Instagram', 'ft.copy': '© 2026 Dragon Boats. Demo version.', 'ft.photos': 'Photos: Pexels',
      'fab': 'Send enquiry',

      'form.err.type': 'Please choose an event type',
      'form.err.required': 'Please fill in the required fields',
      'form.err.email': 'Please enter a valid email address',
      'sum.type': 'Event', 'sum.package': 'Package', 'sum.date': 'Date', 'sum.time': 'Time of day',
      'sum.size': 'Participants', 'sum.location': 'Location', 'sum.extras': 'Extras', 'sum.name': 'Name',
      'sum.company': 'Company', 'sum.phone': 'Phone', 'sum.email': 'Email', 'sum.message': 'Message'
    }
  };

  var lang = 'lt';
  var cache = new WeakMap(); /* elementas -> originalus LT tekstas */
  var ATTRS = [
    { sel: '[data-i18n]', attr: 'data-i18n', prop: 'text' },
    { sel: '[data-i18n-placeholder]', attr: 'data-i18n-placeholder', prop: 'placeholder' },
    { sel: '[data-i18n-content]', attr: 'data-i18n-content', prop: 'content' }
  ];

  function swap(el, attr, prop) {
    var key = el.getAttribute(attr);
    var store = cache.get(el);
    if (!store) { store = {}; cache.set(el, store); }
    if (!(prop in store)) store[prop] = prop === 'text' ? el.textContent : el.getAttribute(prop);
    var val = lang === 'lt' ? store[prop] : (dict[lang] && dict[lang][key]) || store[prop];
    if (prop === 'text') el.textContent = val; else el.setAttribute(prop, val);
  }

  function apply(l) {
    if (!dict[l] && l !== 'lt') l = 'lt';
    lang = l;
    document.documentElement.lang = l;
    document.documentElement.setAttribute('data-lang', l);
    ATTRS.forEach(function (a) {
      document.querySelectorAll(a.sel).forEach(function (el) { swap(el, a.attr, a.prop); });
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-set-lang') === l);
    });
    try { localStorage.setItem('dv-lang', l); } catch (e) { /* privatus režimas */ }
    document.dispatchEvent(new CustomEvent('dv:langchange', { detail: { lang: l } }));
  }

  function t(key) {
    var d = dict[lang] || {};
    return d[key] || dict.lt[key] || key;
  }

  /* Lietuviški daugiskaitos linksniai: [1 valtis, 2–9 valtys, 10+ valčių] */
  function pluralLt(n, forms) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return forms[0];
    if (m10 >= 2 && m10 <= 9 && !(m100 >= 11 && m100 <= 19)) return forms[1];
    return forms[2];
  }

  function sizeLabel(n, boats) {
    if (lang === 'lt') {
      return n + ' ' + pluralLt(n, ['dalyvis', 'dalyviai', 'dalyvių']) + ' · ' + boats + ' ' + pluralLt(boats, ['valtis', 'valtys', 'valčių']);
    }
    return n + (n === 1 ? ' participant' : ' participants') + ' · ' + boats + (boats === 1 ? ' boat' : ' boats');
  }

  function init() {
    var initial = 'lt';
    var q = new URLSearchParams(location.search).get('lang');
    if (q && dict[q]) initial = q;
    else { try { var s = localStorage.getItem('dv-lang'); if (s && (s === 'lt' || dict[s])) initial = s; } catch (e) {} }
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-set-lang')); });
    });
    apply(initial);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  return { apply: apply, t: t, sizeLabel: sizeLabel, lang: function () { return lang; }, dict: dict };
})();
