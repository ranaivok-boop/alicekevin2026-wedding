(function () {
  const supported = ["fr", "it", "en"];
  const DEFAULT_LANG = "fr";

  const i18n = {
    fr: {
      "a11y.skip": "Aller au contenu principal",

      "nav.home": "Accueil",
      "nav.story": "Notre histoire",
      "nav.details": "Détails",
      "nav.travel": "Voyage & séjour",
      "nav.rsvp": "RSVP",
      "nav.gift": "Cadeau",

      "home.kicker": "Alice & Kevin — Mariage en Sicile",
      "home.invite": "ont l’honneur de vous convier à la célébration de leur union",
      "home.date": "Samedi 20 juin 2026",
      "home.place": "Syracuse, Sicile — Italie",
      "home.intro": "Nous serions profondément heureux de vous accueillir en Sicile pour célébrer ensemble ce moment si précieux. Deux journées, une même intention : partager, entourés de nos proches, une parenthèse de beauté, de douceur et d’élégance.",
      "home.ctaRsvp": "Confirmer ma présence",
      "home.ctaDetails": "Voir les détails",
      "home.quickTitle": "Informations essentielles",
      "home.quickSubtitle": "Programme, voyage & séjour, RSVP et cadeau — tout au même endroit.",
      "home.ctaRsvp2": "Ouvrir le RSVP",

      "cards.details.title": "Détails",
      "cards.details.desc": "Cérémonie & réception",
      "cards.programme.title": "Programme",
      "cards.programme.desc": "20–21 juin 2026",
      "cards.travel.title": "Voyage & séjour",
      "cards.travel.desc": "Arrivée, déplacements, logement",
      "cards.gift.title": "Cadeau",
      "cards.gift.desc": "Un geste, si vous le souhaitez",

      "story.kicker": "Alice & Kevin",
      "story.title": "Notre histoire",
      "story.intro": "Il arrive parfois que la vie choisisse des lieux ordinaires pour y glisser l’extraordinaire.",
      "story.fr.h1": "Une rencontre inattendue",
      "story.fr.p1": "Février 2019, Singapour. Un ascenseur à l’ESSEC Business School. Rien de spectaculaire, sinon cette intuition silencieuse que quelque chose, ce jour-là, venait de commencer. Une question anodine, un sourire doux et espiègle. Pour Alice, une anecdote. Pour Kevin, une évidence.",
      "story.fr.h2": "Le temps du silence et des signes",
      "story.fr.p2": "Les mois suivants, ils se croisèrent souvent. Ils se reconnaissaient. Un regard, parfois un salut discret. Comme si le silence faisait encore partie du chemin, comme si l’histoire avait besoin de patience pour s’écrire.",
      "story.fr.h3": "Le premier choix",
      "story.fr.p3": "Le 26 avril 2019, lors d’un apéritif à Singapour, le hasard décida de s’effacer. Ils prirent enfin le temps de se parler, longuement. Plus tard, la musique, la danse, et cette sensation simple et rare : celle d’une rencontre qui compte.",
      "story.fr.h4": "La distance comme révélateur",
      "story.fr.p4": "Lorsque la distance s’installa, une évidence apparut : l’absence révèle parfois l’essentiel. Les messages devinrent des appels, les appels des FaceTime. Malgré les fuseaux horaires, une complicité sincère se tissa.",
      "story.fr.h5": "Le courage d’y croire",
      "story.fr.p5": "Kevin fit un choix clair : revenir. Refuser la facilité, choisir la fidélité à ce qu’il ressentait. Peu à peu, la confiance s’installa, et avec elle le bonheur.",
      "story.fr.h6": "Aimer, c’est aussi rencontrer une famille",
      "story.fr.p6": "Aimer, c’est parfois apprendre à aimer une famille entière. Avec le temps, la patience et le dialogue, les incompréhensions s’apaisèrent, et les liens se créèrent.",
      "story.fr.q1": "« Kevin est un bon garçon. »",
      "story.fr.h7": "Construire, ensemble",
      "story.fr.p7": "Les années ont passé. Les familles se sont rapprochées. Les liens se sont renforcés. Leur histoire n’a jamais été une promesse facile, mais un chemin — parfois exigeant, toujours sincère.",
      "story.fr.p8": "Et en ce 20 juin 2026, Alice et Kevin scelleront cet amour patiemment construit, entourés de ceux qui ont compté à chaque étape de leur histoire.",
      "story.it.p1": "A volte la vita sceglie luoghi ordinari per dare inizio a qualcosa di straordinario. Per noi, tutto è cominciato in un ascensore.",
      "story.it.p2": "Febbraio 2019, Singapore. Un incontro semplice, uno sguardo, un sorriso. Per Alice, un episodio curioso. Per Kevin, una certezza silenziosa.",
      "story.it.p3": "Il tempo, la distanza, le scelte coraggiose e la pazienza hanno fatto il resto. E il 20 giugno 2026, Alice e Kevin uniranno le loro vite nel matrimonio, circondati da coloro che hanno accompagnato ogni passo del loro cammino.",
      "story.en.p1": "Sometimes life chooses the most ordinary places to begin something extraordinary. For us, it all started in an elevator.",
      "story.en.p2": "February 2019, Singapore. A simple encounter, a smile, a quiet certainty. Time, distance, patience and sincere choices gradually shaped what followed.",
      "story.en.p3": "On June 20th, 2026, Alice and Kevin will unite in marriage, surrounded by those who have mattered at every step of their journey.",
      "story.readMore": "Lire la suite",
      "story.readLess": "Réduire",
      "story.ctaRsvp": "Confirmer ma présence",

      "details.kicker": "Alice & Kevin",
      "details.title": "Détails",
      "details.lead": "Cérémonie, réception, programme et informations pratiques.",
      "details.ceremony.title": "Cérémonie",
      "details.ceremony.body": "Cérémonie religieuse — Duomo di Siracusa (Ortigia) — 11h30",
      "details.reception.title": "Réception",
      "details.reception.body": "Villa Biviere Borghese (Lentini) — à partir de 17h30",
      "details.envelopeTitle": "Une parenthèse en Sicile",
      "details.envelopeText": "Une invitation à célébrer, à prendre le temps, et à profiter de la douceur d’Ortigia.",
      "details.ctaRsvp": "Confirmer ma présence",

      "programme.title": "Programme du mariage",
      "programme.day1.title": "Samedi 20 juin 2026",
      "programme.day1.time1": "11h30",
      "programme.day1.item1": "Cérémonie religieuse — Duomo di Siracusa (Ortigia)",
      "programme.day1.time2": "13h00",
      "programme.day1.item2": "Aperitivo — Caffè Archimede (Ortigia)",
      "programme.day1.time3": "15h00",
      "programme.day1.item3": "Promenade à Ortigia — Découverte libre",
      "programme.day1.time4": "17h30",
      "programme.day1.item4": "Réception — Villa Biviere Borghese (Lentini) — à partir de",
      "programme.day2.title": "Dimanche 21 juin 2026",
      "programme.day2.time1": "14h00",
      "programme.day2.item1": "Apéritivo Italiano — Villa Nunziatina — à partir de 14h00",
      "programme.note": "Les horaires sont donnés à titre indicatif afin de vous permettre d’organiser votre journée en toute sérénité.",

      "dresscode.title": "Dress code",
      "dresscode.body": "Une tenue élégante et estivale, en harmonie avec les lieux et la saison. L’essentiel est que vous vous sentiez à l’aise pour profiter pleinement de ces journées.",

      "travel.kicker": "Alice & Kevin",
      "travel.title": "Voyage & séjour — Syracuse, Sicile",
      "travel.intro": "Afin de faciliter votre venue, vous trouverez ici les informations essentielles.",
      "travel.arrival.title": "Arriver en Sicile",
      "travel.arrival.body": "Aéroport recommandé : Catane (CTA)",
      "travel.move.title": "Se déplacer",
      "travel.move.body": "La location d’un véhicule est recommandée dès votre arrivée à Catane (Europcar, Sicily by Car, Sixt — réservation anticipée conseillée)",
      "travel.stay.title": "Où loger",
      "travel.stay.body": "Lentini — Badiula. Tarifs préférentiels avec le code WeddingAK (valable jusqu’au 31 mars 2026)",
      "travel.todo.title": "À faire en Sicile",
      "travel.todo.body": "Si votre planning le permet : une promenade au coucher du soleil à Ortigia, un dîner au bord de l’eau, et le plaisir simple de prendre le temps.",
      "travel.ctaRsvp": "Confirmer ma présence",

      "rsvp.kicker": "Alice & Kevin",
      "rsvp.title": "Confirmation de présence",
      "rsvp.deadline": "Nous vous remercions de bien vouloir confirmer votre présence avant le 1ᵉʳ avril 2026, afin de nous aider à organiser ces journées dans les meilleures conditions.",
      "rsvp.bullet1": "— le samedi 20 juin 2026",
      "rsvp.bullet2": "— le dimanche 21 juin 2026",
      "rsvp.button": "Ouvrir le formulaire RSVP",
      "rsvp.micro": "Merci — cela ne prend qu’une minute.",

      "gift.kicker": "Alice & Kevin",
      "gift.title": "Cadeau aux mariés",
      "gift.lead": "Votre présence à nos côtés sera, à elle seule, le plus précieux des cadeaux.",
      "gift.p1": "Votre présence à nos côtés sera, à elle seule, le plus précieux des cadeaux.",
      "gift.p2": "Si vous souhaitez nous témoigner une attention, une contribution à notre avenir commun serait profondément appréciée.",
      "gift.bankTitle": "Virement bancaire",
      "gift.bankNotice": "Par souci de simplicité, les contributions s’effectuent exclusivement par virement bancaire. Les informations seront partagées prochainement.",

      "footer.note": "Alice & Kevin — Syracuse, Sicile",
      "footer.legal": "© 2026 — Invitation digitale",
    },

    it: {
      "a11y.skip": "Vai al contenuto principale",

      "nav.home": "Home",
      "nav.story": "La nostra storia",
      "nav.details": "Dettagli",
      "nav.travel": "Viaggio & soggiorno",
      "nav.rsvp": "RSVP",
      "nav.gift": "Regalo",

      "home.kicker": "Alice & Kevin — Matrimonio in Sicilia",
      "home.invite": "hanno l’onore di invitarvi alla celebrazione della loro unione",
      "home.date": "Sabato 20 giugno 2026",
      "home.place": "Siracusa, Sicilia — Italia",
      "home.intro": "Saremmo davvero felici di accogliervi in Sicilia per celebrare insieme questo momento così prezioso. Due giornate, un’unica intenzione: condividere, con le persone a noi care, una parentesi di bellezza, dolcezza ed eleganza.",
      "home.ctaRsvp": "Confermare la presenza",
      "home.ctaDetails": "Vedere i dettagli",
      "home.quickTitle": "Informazioni essenziali",
      "home.quickSubtitle": "Programma, viaggio & soggiorno, RSVP e regalo — tutto in un unico luogo.",
      "home.ctaRsvp2": "Aprire l’RSVP",

      "cards.details.title": "Dettagli",
      "cards.details.desc": "Cerimonia & ricevimento",
      "cards.programme.title": "Programma",
      "cards.programme.desc": "20–21 giugno 2026",
      "cards.travel.title": "Viaggio & soggiorno",
      "cards.travel.desc": "Arrivo, spostamenti, alloggio",
      "cards.gift.title": "Regalo",
      "cards.gift.desc": "Un gesto, se lo desiderate",

      "story.kicker": "Alice & Kevin",
      "story.title": "La nostra storia",
      "story.intro": "A volte la vita sceglie luoghi ordinari per dare inizio a qualcosa di straordinario.",
      "story.it.p1": "A volte la vita sceglie luoghi ordinari per dare inizio a qualcosa di straordinario. Per noi, tutto è cominciato in un ascensore.",
      "story.it.p2": "Febbraio 2019, Singapore. Un incontro semplice, uno sguardo, un sorriso. Per Alice, un episodio curioso. Per Kevin, una certezza silenziosa.",
      "story.it.p3": "Il tempo, la distanza, le scelte coraggiose e la pazienza hanno fatto il resto. E il 20 giugno 2026, Alice e Kevin uniranno le loro vite nel matrimonio, circondati da coloro che hanno accompagnato ogni passo del loro cammino.",
      "story.en.p1": "", "story.en.p2": "", "story.en.p3": "",
      "story.fr.h1": "", "story.fr.p1": "", "story.fr.h2": "", "story.fr.p2": "",
      "story.fr.h3": "", "story.fr.p3": "", "story.fr.h4": "", "story.fr.p4": "",
      "story.fr.h5": "", "story.fr.p5": "", "story.fr.h6": "", "story.fr.p6": "",
      "story.fr.q1": "", "story.fr.h7": "", "story.fr.p7": "", "story.fr.p8": "",
      "story.readMore": "Leggi di più",
      "story.readLess": "Riduci",
      "story.ctaRsvp": "Confermare la presenza",

      "details.kicker": "Alice & Kevin",
      "details.title": "Dettagli",
      "details.lead": "Cerimonia, ricevimento, programma e informazioni pratiche.",
      "details.ceremony.title": "Cerimonia",
      "details.ceremony.body": "Cerimonia religiosa — Duomo di Siracusa (Ortigia) — ore 11:30",
      "details.reception.title": "Ricevimento",
      "details.reception.body": "Villa Biviere Borghese (Lentini) — dalle ore 17:30",
      "details.envelopeTitle": "Una parentesi in Sicilia",
      "details.envelopeText": "Un invito a celebrare, a prendersi il tempo e a godere della dolcezza di Ortigia.",
      "details.ctaRsvp": "Confermare la presenza",

      "programme.title": "Programma",
      "programme.day1.title": "Sabato 20 giugno 2026",
      "programme.day1.time1": "11:30",
      "programme.day1.item1": "Cerimonia religiosa — Duomo di Siracusa (Ortigia)",
      "programme.day1.time2": "13:00",
      "programme.day1.item2": "Aperitivo — Caffè Archimede (Ortigia)",
      "programme.day1.time3": "15:00",
      "programme.day1.item3": "Passeggiata a Ortigia — tempo libero",
      "programme.day1.time4": "17:30",
      "programme.day1.item4": "Ricevimento — Villa Biviere Borghese (Lentini) — dalle",
      "programme.day2.title": "Domenica 21 giugno 2026",
      "programme.day2.time1": "14:00",
      "programme.day2.item1": "Aperitivo Italiano — Villa Nunziatina — dalle 14:00",
      "programme.note": "Gli orari sono indicativi, per aiutarvi a organizzare la giornata con serenità.",

      "dresscode.title": "Dress code",
      "dresscode.body": "Un abbigliamento elegante e leggero, in armonia con i luoghi e la stagione. Ciò che conta è sentirsi a proprio agio per vivere appieno questi momenti insieme.",

      "travel.kicker": "Alice & Kevin",
      "travel.title": "Viaggio & soggiorno — Siracusa, Sicilia",
      "travel.intro": "Per facilitarvi, trovate qui le informazioni essenziali.",
      "travel.arrival.title": "Arrivare in Sicilia",
      "travel.arrival.body": "Aeroporto consigliato: Catania (CTA)",
      "travel.move.title": "Spostamenti",
      "travel.move.body": "Noleggio auto consigliato (prenotazione anticipata consigliata).",
      "travel.stay.title": "Dove alloggiare",
      "travel.stay.body": "Lentini — Badiula. Tariffe con codice WeddingAK (valido fino al 31 marzo 2026).",
      "travel.todo.title": "Da fare in Sicilia",
      "travel.todo.body": "Se possibile: passeggiata al tramonto a Ortigia, cena sul mare, e il piacere semplice di prendersi il tempo.",
      "travel.ctaRsvp": "Confermare la presenza",

      "rsvp.kicker": "Alice & Kevin",
      "rsvp.title": "RSVP",
      "rsvp.deadline": "Vi preghiamo di confermare la vostra presenza entro il 1° aprile 2026 tramite il modulo online.",
      "rsvp.bullet1": "— sabato 20 giugno 2026",
      "rsvp.bullet2": "— domenica 21 giugno 2026",
      "rsvp.button": "Aprire il modulo RSVP",
      "rsvp.micro": "Grazie — ci vorrà solo un minuto.",

      "gift.kicker": "Alice & Kevin",
      "gift.title": "Regalo",
      "gift.lead": "La vostra presenza sarà per noi il dono più prezioso.",
      "gift.p1": "La vostra presenza sarà per noi il dono più prezioso.",
      "gift.p2": "Se lo desiderate, una contribuzione al nostro futuro insieme sarà sinceramente apprezzata.",
      "gift.bankTitle": "Bonifico bancario",
      "gift.bankNotice": "Per semplicità, le contribuzioni avvengono esclusivamente tramite bonifico. I dettagli saranno condivisi a breve.",

      "footer.note": "Alice & Kevin — Siracusa, Sicilia",
      "footer.legal": "© 2026 — Invito digitale",
    },

    en: {
      "a11y.skip": "Skip to main content",

      "nav.home": "Home",
      "nav.story": "Our story",
      "nav.details": "Details",
      "nav.travel": "Travel & stay",
      "nav.rsvp": "RSVP",
      "nav.gift": "Wedding gift",

      "home.kicker": "Alice & Kevin — Wedding in Sicily",
      "home.invite": "request the honour of your presence at the celebration of their union",
      "home.date": "Saturday, June 20th, 2026",
      "home.place": "Syracuse, Sicily — Italy",
      "home.intro": "We would be truly delighted to welcome you to Sicily to celebrate this precious moment with us. Two days, one intention: to share, with those dearest to us, a moment of beauty, warmth and timeless elegance.",
      "home.ctaRsvp": "Confirm attendance",
      "home.ctaDetails": "View details",
      "home.quickTitle": "Key information",
      "home.quickSubtitle": "Programme, travel & stay, RSVP and gift — all in one place.",
      "home.ctaRsvp2": "Open RSVP",

      "cards.details.title": "Details",
      "cards.details.desc": "Ceremony & reception",
      "cards.programme.title": "Programme",
      "cards.programme.desc": "June 20–21, 2026",
      "cards.travel.title": "Travel & stay",
      "cards.travel.desc": "Arrival, transport, accommodation",
      "cards.gift.title": "Wedding gift",
      "cards.gift.desc": "A gesture, if you wish",

      "story.kicker": "Alice & Kevin",
      "story.title": "Our story",
      "story.intro": "Sometimes life chooses the most ordinary places to begin something extraordinary.",
      "story.en.p1": "Sometimes life chooses the most ordinary places to begin something extraordinary. For us, it all started in an elevator.",
      "story.en.p2": "February 2019, Singapore. A simple encounter, a smile, a quiet certainty. Time, distance, patience and sincere choices gradually shaped what followed.",
      "story.en.p3": "On June 20th, 2026, Alice and Kevin will unite in marriage, surrounded by those who have mattered at every step of their journey.",
      "story.it.p1": "", "story.it.p2": "", "story.it.p3": "",
      "story.fr.h1": "", "story.fr.p1": "", "story.fr.h2": "", "story.fr.p2": "",
      "story.fr.h3": "", "story.fr.p3": "", "story.fr.h4": "", "story.fr.p4": "",
      "story.fr.h5": "", "story.fr.p5": "", "story.fr.h6": "", "story.fr.p6": "",
      "story.fr.q1": "", "story.fr.h7": "", "story.fr.p7": "", "story.fr.p8": "",
      "story.readMore": "Read more",
      "story.readLess": "Show less",
      "story.ctaRsvp": "Confirm attendance",

      "details.kicker": "Alice & Kevin",
      "details.title": "Details",
      "details.lead": "Ceremony, reception, programme and practical information.",
      "details.ceremony.title": "Religious ceremony",
      "details.ceremony.body": "Duomo di Siracusa (Ortigia) — 11:30 AM",
      "details.reception.title": "Reception",
      "details.reception.body": "Villa Biviere Borghese (Lentini) — from 5:30 PM",
      "details.envelopeTitle": "A moment in Sicily",
      "details.envelopeText": "An invitation to celebrate, slow down, and enjoy Ortigia’s gentle atmosphere.",
      "details.ctaRsvp": "Confirm attendance",

      "programme.title": "Programme",
      "programme.day1.title": "Saturday, June 20th, 2026",
      "programme.day1.time1": "11:30 AM",
      "programme.day1.item1": "Religious Ceremony — Duomo di Siracusa (Ortigia)",
      "programme.day1.time2": "1:00 PM",
      "programme.day1.item2": "Aperitivo — Caffè Archimede (Ortigia)",
      "programme.day1.time3": "3:00 PM",
      "programme.day1.item3": "Walk through Ortigia — free time",
      "programme.day1.time4": "5:30 PM",
      "programme.day1.item4": "Reception — Villa Biviere Borghese (Lentini) — from",
      "programme.day2.title": "Sunday, June 21st, 2026",
      "programme.day2.time1": "2:00 PM",
      "programme.day2.item1": "Italian Aperitivo — Villa Nunziatina — from 2:00 PM",
      "programme.note": "Times are indicative, to help you plan your day with ease.",

      "dresscode.title": "Dress code",
      "dresscode.body": "Elegant summer attire, in harmony with the setting and the season. Above all, we wish you to feel comfortable and enjoy these days with us.",

      "travel.kicker": "Alice & Kevin",
      "travel.title": "Travel & stay — Syracuse, Sicily",
      "travel.intro": "To help you plan your trip, here are the essential details.",
      "travel.arrival.title": "Getting to Sicily",
      "travel.arrival.body": "Recommended airport: Catania (CTA)",
      "travel.move.title": "Getting around",
      "travel.move.body": "Car rental is recommended (booking in advance is advised).",
      "travel.stay.title": "Where to stay",
      "travel.stay.body": "Lentini — Badiula. Preferred rates with code WeddingAK (valid until March 31, 2026).",
      "travel.todo.title": "What to do in Sicily",
      "travel.todo.body": "If your schedule allows: a sunset walk in Ortigia, dinner by the water, and the simple pleasure of taking your time.",
      "travel.ctaRsvp": "Confirm attendance",

      "rsvp.kicker": "Alice & Kevin",
      "rsvp.title": "RSVP",
      "rsvp.deadline": "Kindly confirm your attendance by April 1st, 2026, using the online form.",
      "rsvp.bullet1": "— Saturday, June 20th, 2026",
      "rsvp.bullet2": "— Sunday, June 21st, 2026",
      "rsvp.button": "Open RSVP form",
      "rsvp.micro": "Thank you — it only takes a minute.",

      "gift.kicker": "Alice & Kevin",
      "gift.title": "Wedding gift",
      "gift.lead": "Your presence is the greatest gift we could receive.",
      "gift.p1": "Your presence is the greatest gift we could receive.",
      "gift.p2": "Should you wish to honour us with a contribution, a gesture towards our future together would be sincerely appreciated.",
      "gift.bankTitle": "Bank transfer",
      "gift.bankNotice": "For simplicity, contributions are made exclusively via bank transfer. Details will be shared shortly.",

      "footer.note": "Alice & Kevin — Syracuse, Sicily",
      "footer.legal": "© 2026 — Digital invitation",
    },
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function getInitialLang() {
    const saved = localStorage.getItem("lang");
    if (saved && supported.includes(saved)) return saved;

    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("it")) return "it";
    if (nav.startsWith("en")) return "en";
    return DEFAULT_LANG;
  }

  function setPressed(lang) {
    $$(".lang-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
  }

  function applyI18n(lang) {
    const dict = i18n[lang] || i18n[DEFAULT_LANG];

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string" && value.length) el.textContent = value;
    });

    $$("[data-lang-only]").forEach((el) => {
      el.hidden = el.getAttribute("data-lang-only") !== lang;
    });

    document.documentElement.lang = lang;
    setPressed(lang);
    localStorage.setItem("lang", lang);

    // Sync readmore if present
    const story = $(".story");
    const btn = $('[data-action="toggle-story"]');
    if (story && btn) {
      const collapsed = story.getAttribute("data-collapsed") === "true";
      btn.textContent = collapsed ? dict["story.readMore"] : dict["story.readLess"];
    }
  }

  function initStoryCollapse() {
    const story = $(".story");
    const btn = $('[data-action="toggle-story"]');
    if (!story || !btn) return;

    story.setAttribute("data-collapsed", "true");

    btn.addEventListener("click", () => {
      const isCollapsed = story.getAttribute("data-collapsed") === "true";
      story.setAttribute("data-collapsed", isCollapsed ? "false" : "true");

      const lang = localStorage.getItem("lang") || DEFAULT_LANG;
      const dict = i18n[lang] || i18n[DEFAULT_LANG];
      btn.textContent = isCollapsed ? dict["story.readLess"] : dict["story.readMore"];
    });
  }

  function initMobileMenu() {
    const btn = $(".menu-btn");
    const menu = $(".mobile-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      menu.hidden = open;
    });

    $$(".mobile-link").forEach((a) => {
      a.addEventListener("click", () => {
        btn.setAttribute("aria-expanded", "false");
        menu.hidden = true;
      });
    });
  }

  function initLangButtons() {
    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (!supported.includes(lang)) return;
        applyI18n(lang);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initLangButtons();
    initStoryCollapse();

    applyI18n(getInitialLang());
  });
})();
