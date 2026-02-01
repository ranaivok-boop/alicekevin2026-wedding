/* =========================================================
   main.js — Menu mobile + i18n FR/IT/EN (localStorage)
   ========================================================= */

(function () {
  const STORAGE_KEY = "ak_lang";
  const supported = ["fr", "it", "en"];

  const dict = {
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

      "story.title": "Notre histoire",
      "story.lead": "Il arrive parfois que la vie choisisse des lieux ordinaires pour y glisser l’extraordinaire.",
      "story.p0": "Il arrive parfois que la vie choisisse des lieux ordinaires pour y glisser l’extraordinaire. Pour nous, tout a commencé dans un ascenseur — et s’est poursuivi comme un chemin patiemment construit, étage après étage.",
      "story.h1": "Une rencontre inattendue",
      "story.p1": "Février 2019, Singapour. Un ascenseur à l’ESSEC Business School. Rien de spectaculaire, sinon cette intuition silencieuse que quelque chose, ce jour-là, venait de commencer. Une question anodine, un sourire doux et espiègle. Pour Alice, une anecdote. Pour Kevin, une évidence.",
      "story.h2": "Le temps du silence et des signes",
      "story.p2": "Les mois suivants, ils se croisèrent souvent. Ils se reconnaissaient. Un regard, parfois un salut discret. Comme si le silence faisait encore partie du chemin, comme si l’histoire avait besoin de patience pour s’écrire.",
      "story.h3": "Le premier choix",
      "story.p3": "Le 26 avril 2019, lors d’un apéritif à Singapour, le hasard décida de s’effacer. Ils prirent enfin le temps de se parler, longuement. Plus tard, la musique, la danse, et cette sensation simple et rare : celle d’une rencontre qui compte.",
      "story.h4": "La distance comme révélateur",
      "story.p4": "Lorsque la distance s’installa, une évidence apparut : l’absence révèle parfois l’essentiel. Les messages devinrent des appels, les appels des FaceTime. Malgré les fuseaux horaires, une complicité sincère se tissa.",
      "story.h5": "Le courage d’y croire",
      "story.p5": "Kevin fit un choix clair : revenir. Refuser la facilité, choisir la fidélité à ce qu’il ressentait. Peu à peu, la confiance s’installa, et avec elle le bonheur.",
      "story.h6": "Aimer, c’est aussi rencontrer une famille",
      "story.p6": "Aimer, c’est parfois apprendre à aimer une famille entière. Avec le temps, la patience et le dialogue, les incompréhensions s’apaisèrent, et les liens se créèrent.",
      "story.q1": "« Kevin est un bon garçon. »",
      "story.h7": "Construire, ensemble",
      "story.p7": "Les années ont passé. Les familles se sont rapprochées. Les liens se sont renforcés. Leur histoire n’a jamais été une promesse facile, mais un chemin — parfois exigeant, toujours sincère.",
      "story.p8": "Et en ce 20 juin 2026, Alice et Kevin scelleront cet amour patiemment construit, entourés de ceux qui ont compté à chaque étape de leur histoire.",
      "story.cta": "Confirmer ma présence",

      "details.title": "Détails",
      "details.lead": "Programme du week-end et informations essentielles.",
      "details.cta": "Confirmer ma présence",

      "programme.title": "Programme du mariage",
      "programme.day1": "Samedi 20 juin 2026",
      "programme.d1.l1": "Cérémonie religieuse — Duomo di Siracusa (Ortigia) — 11h30",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — 13h00",
      "programme.d1.l3": "Promenade à Ortigia — Découverte libre — 15h00",
      "programme.d1.l4": "Réception — Villa Biviere Borghese (Lentini) — à partir de 17h30",
      "programme.day2": "Dimanche 21 juin 2026",
      "programme.d2.l1": "Apéritivo Italiano — Villa Nunziatina — à partir de 14h00, jusqu’au soir",
      "programme.hint": "Les horaires sont donnés à titre indicatif afin de vous permettre d’organiser votre journée en toute sérénité.",

      "dress.title": "Dress code",
      "dress.text": "Thème : butter yellow. Une élégance estivale, légère et soignée — merci de privilégier des tons doux, lumineux et harmonieux.",
      "dress.b1": "Élégant & estival",
      "dress.b2": "Tons clairs",
      "dress.b3": "Confortable",
      "dress.note": "Nous affinerons si besoin — l’essentiel est une harmonie douce, en accord avec la Sicile en juin.",

      "travel.kicker": "Voyage & séjour — Syracuse, Sicile",
      "travel.title": "Voyage & séjour",
      "travel.lead": "Afin de faciliter votre venue, vous trouverez ici les informations essentielles.",
      "travel.arrive.title": "Arriver en Sicile",
      "travel.arrive.text": "Aéroport recommandé : Catane (CTA)",
      "travel.move.title": "Se déplacer",
      "travel.move.text": "La location d’un véhicule est recommandée dès votre arrivée à Catane (Europcar, Sicily by Car, Sixt — réservation anticipée conseillée).",
      "travel.stay.title": "Où loger",
      "travel.stay.text": "Lentini — Badiula. Tarifs préférentiels avec le code WeddingAK (valable jusqu’au 31 mars 2026).",
      "travel.todo.title": "À faire en Sicile",
      "travel.todo.text": "Si votre planning le permet : une promenade au coucher du soleil à Ortigia, un dîner au bord de l’eau, et le plaisir simple de prendre le temps.",
      "travel.cta": "Ouvrir le RSVP",

      "rsvp.title": "Confirmation de présence",
      "rsvp.lead": "Nous vous remercions de bien vouloir confirmer votre présence avant le 1ᵉʳ avril 2026, afin de nous aider à organiser ces journées dans les meilleures conditions.",
      "rsvp.h2": "RSVP",
      "rsvp.text": "Le formulaire vous permettra d’indiquer votre présence : le samedi 20 juin 2026 et le dimanche 21 juin 2026.",
      "rsvp.cta": "Accéder au formulaire",
      "rsvp.note": "Si le lien ne s’ouvre pas, copiez-collez l’URL dans votre navigateur.",

      "gift.title": "Cadeau aux mariés",
      "gift.lead": "Votre présence à nos côtés sera, à elle seule, le plus précieux des cadeaux.",
      "gift.p1": "Si vous souhaitez nous témoigner une attention, une contribution à notre avenir commun serait profondément appréciée.",
      "gift.p2": "Par souci de simplicité, les contributions s’effectuent exclusivement par virement bancaire.",
      "gift.iban": "[à renseigner]",
      "gift.bic": "[à renseigner]",
      "gift.holderLabel": "Titulaire",
      "gift.holder": "[à renseigner]",
      "gift.note": "Nous mettrons à jour ces informations dès que possible.",

      "biviere.kicker": "Réception",
      "biviere.title": "Villa Biviere Borghese",
      "biviere.lead": "Lentini — à partir de 17h30 (samedi 20 juin 2026).",
      "biviere.p1": "La réception aura lieu dans un cadre élégant, au cœur de la campagne sicilienne. Nous partagerons ensemble un dîner, puis une soirée festive.",
      "biviere.p2": "Les informations pratiques (transferts, horaires finaux, accès) seront confirmées à l’approche de l’événement.",
      "biviere.cta": "Revoir le programme",

      "footer.note": "Alice & Kevin — Syracuse, Sicile",
      "footer.legal": "© 2026 — Invitation digitale"
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
      "home.quickSubtitle": "Programma, viaggio & soggiorno, RSVP e regalo — tutto nello stesso posto.",
      "home.ctaRsvp2": "Aprire l’RSVP",

      "cards.details.title": "Dettagli",
      "cards.details.desc": "Cerimonia & ricevimento",
      "cards.programme.title": "Programma",
      "cards.programme.desc": "20–21 giugno 2026",
      "cards.travel.title": "Viaggio & soggiorno",
      "cards.travel.desc": "Arrivo, spostamenti, alloggio",
      "cards.gift.title": "Regalo",
      "cards.gift.desc": "Un pensiero, se lo desiderate",

      "story.title": "La nostra storia",
      "story.lead": "A volte la vita sceglie luoghi ordinari per dare inizio a qualcosa di straordinario.",
      "story.p0": "A volte la vita sceglie luoghi ordinari per dare inizio a qualcosa di straordinario. Per noi, tutto è cominciato in un ascensore — e da lì, passo dopo passo, con calma e intenzione.",
      "story.h1": "Un incontro inatteso",
      "story.p1": "Febbraio 2019, Singapore. Un incontro semplice, uno sguardo, un sorriso. Per Alice, un episodio curioso. Per Kevin, una certezza silenziosa.",
      "story.h2": "Il tempo, i segni",
      "story.p2": "Nei mesi successivi si incrociarono spesso. Un saluto discreto, un’intesa che cresceva senza fretta.",
      "story.h3": "La prima scelta",
      "story.p3": "Il 26 aprile 2019, durante un aperitivo a Singapore, si presero finalmente il tempo di parlarsi davvero. Poi la musica, la danza, e la sensazione rara di un incontro che conta.",
      "story.h4": "La distanza che rivela",
      "story.p4": "Con la distanza arrivò una nuova evidenza: a volte l’assenza chiarisce l’essenziale. I messaggi diventarono chiamate, le chiamate FaceTime: la complicità si fece reale.",
      "story.h5": "Il coraggio di crederci",
      "story.p5": "Kevin scelse di tornare. Scegliere ciò che sentiva, con chiarezza. La fiducia crebbe, e con lei la felicità.",
      "story.h6": "Incontrare una famiglia",
      "story.p6": "Amare significa anche incontrare una famiglia intera. Con pazienza e dialogo, le incomprensioni si sciolsero e i legami nacquero.",
      "story.q1": "« Kevin è un bravo ragazzo. »",
      "story.h7": "Costruire insieme",
      "story.p7": "Gli anni sono passati, le famiglie si sono avvicinate. Non una promessa facile, ma un cammino sincero.",
      "story.p8": "E il 20 giugno 2026, Alice e Kevin uniranno le loro vite nel matrimonio, circondati da chi ha accompagnato ogni passo del loro percorso.",
      "story.cta": "Confermare la presenza",

      "details.title": "Dettagli",
      "details.lead": "Programma del weekend e informazioni essenziali.",
      "details.cta": "Confermare la presenza",

      "programme.title": "Programma",
      "programme.day1": "Sabato 20 giugno 2026",
      "programme.d1.l1": "Cerimonia religiosa — Duomo di Siracusa (Ortigia) — ore 11:30",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — ore 13:00",
      "programme.d1.l3": "Passeggiata a Ortigia — tempo libero — ore 15:00",
      "programme.d1.l4": "Ricevimento — Villa Biviere Borghese (Lentini) — dalle ore 17:30",
      "programme.day2": "Domenica 21 giugno 2026",
      "programme.d2.l1": "Aperitivo Italiano — Villa Nunziatina — dalle ore 14:00, fino a sera",
      "programme.hint": "Gli orari sono indicativi per permettervi di organizzare la giornata con serenità.",

      "dress.title": "Dress code",
      "dress.text": "Tema: butter yellow. Eleganza estiva, leggera e curata — vi chiediamo di privilegiare tonalità chiare, morbide e luminose.",
      "dress.b1": "Elegante & estivo",
      "dress.b2": "Toni chiari",
      "dress.b3": "Comodo",
      "dress.note": "Definiremo i dettagli se necessario — l’importante è un’armonia delicata, in sintonia con la Sicilia a giugno.",

      "travel.kicker": "Viaggio & soggiorno — Siracusa, Sicilia",
      "travel.title": "Viaggio & soggiorno",
      "travel.lead": "Per facilitare il vostro arrivo, trovate qui le informazioni essenziali.",
      "travel.arrive.title": "Arrivare in Sicilia",
      "travel.arrive.text": "Aeroporto consigliato: Catania (CTA)",
      "travel.move.title": "Spostarsi",
      "travel.move.text": "Consigliamo il noleggio auto già all’arrivo a Catania (Europcar, Sicily by Car, Sixt — prenotazione anticipata consigliata).",
      "travel.stay.title": "Dove alloggiare",
      "travel.stay.text": "Lentini — Badiula. Tariffe preferenziali con il codice WeddingAK (valido fino al 31 marzo 2026).",
      "travel.todo.title": "Cosa fare in Sicilia",
      "travel.todo.text": "Se il tempo lo permette: una passeggiata al tramonto a Ortigia, una cena sul mare e il piacere semplice di prendersi il tempo.",
      "travel.cta": "Aprire l’RSVP",

      "rsvp.title": "Conferma di presenza",
      "rsvp.lead": "Vi chiediamo di confermare la vostra presenza entro il 1° aprile 2026, per aiutarci a organizzare al meglio queste giornate.",
      "rsvp.h2": "RSVP",
      "rsvp.text": "Il modulo permette di indicare la presenza: sabato 20 giugno 2026 e domenica 21 giugno 2026.",
      "rsvp.cta": "Aprire il modulo",
      "rsvp.note": "Se il link non si apre, copiate e incollate l’URL nel browser.",

      "gift.title": "Regalo",
      "gift.lead": "La vostra presenza è per noi il dono più prezioso.",
      "gift.p1": "Se lo desiderate, una contribuzione al nostro futuro insieme sarà sinceramente apprezzata.",
      "gift.p2": "Per semplicità, le contribuzioni avvengono esclusivamente tramite bonifico bancario.",
      "gift.iban": "[da inserire]",
      "gift.bic": "[da inserire]",
      "gift.holderLabel": "Intestatario",
      "gift.holder": "[da inserire]",
      "gift.note": "Aggiorneremo queste informazioni al più presto.",

      "biviere.kicker": "Ricevimento",
      "biviere.title": "Villa Biviere Borghese",
      "biviere.lead": "Lentini — dalle 17:30 (sabato 20 giugno 2026).",
      "biviere.p1": "Il ricevimento si terrà in un contesto elegante, nella campagna siciliana. Condivideremo la cena e una serata di festa.",
      "biviere.p2": "Le informazioni pratiche (trasferimenti, orari definitivi, accesso) saranno confermate più vicino alla data.",
      "biviere.cta": "Rivedere il programma",

      "footer.note": "Alice & Kevin — Siracusa, Sicilia",
      "footer.legal": "© 2026 — Invito digitale"
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
      "home.quickSubtitle": "Programme, travel & stay, RSVP and gift — everything in one place.",
      "home.ctaRsvp2": "Open RSVP",

      "cards.details.title": "Details",
      "cards.details.desc": "Ceremony & reception",
      "cards.programme.title": "Programme",
      "cards.programme.desc": "June 20–21, 2026",
      "cards.travel.title": "Travel & stay",
      "cards.travel.desc": "Arrival, transport, accommodation",
      "cards.gift.title": "Wedding gift",
      "cards.gift.desc": "A gesture, if you wish",

      "story.title": "Our story",
      "story.lead": "Sometimes life chooses the most ordinary places to begin something extraordinary.",
      "story.p0": "Sometimes life chooses the most ordinary places to begin something extraordinary. For us, it all started in an elevator — and then, patiently, step by step, it became a journey built with intention.",
      "story.h1": "An unexpected encounter",
      "story.p1": "February 2019, Singapore. A simple encounter, a smile, a quiet certainty. For Alice, a light anecdote. For Kevin, something unmistakable.",
      "story.h2": "Time and signs",
      "story.p2": "In the months that followed, they crossed paths often — a look, a discreet hello — as if the story needed time to write itself.",
      "story.h3": "The first choice",
      "story.p3": "On April 26th, 2019, during an aperitivo in Singapore, they finally took the time to talk—properly. Then music, dancing, and that rare feeling: this meeting matters.",
      "story.h4": "Distance, revealed",
      "story.p4": "When distance arrived, so did clarity. Messages became calls, calls became FaceTime—despite time zones, closeness grew real.",
      "story.h5": "The courage to believe",
      "story.p5": "Kevin made a clear choice: to come back. To choose what felt true. Trust settled in—and so did happiness.",
      "story.h6": "Meeting a whole family",
      "story.p6": "Love is also learning to love a family. With patience and dialogue, misunderstandings softened and bonds formed.",
      "story.q1": "“Kevin is a good man.”",
      "story.h7": "Building, together",
      "story.p7": "Years passed, families grew closer, bonds strengthened. Not an easy promise—rather a sincere path.",
      "story.p8": "On June 20th, 2026, Alice and Kevin will unite in marriage, surrounded by those who have mattered at every step of their journey.",
      "story.cta": "Confirm attendance",

      "details.title": "Details",
      "details.lead": "Weekend programme and essential information.",
      "details.cta": "Confirm attendance",

      "programme.title": "Programme",
      "programme.day1": "Saturday, June 20th, 2026",
      "programme.d1.l1": "Religious Ceremony — Duomo di Siracusa (Ortigia) — 11:30 AM",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — 1:00 PM",
      "programme.d1.l3": "Walk through Ortigia — free time — 3:00 PM",
      "programme.d1.l4": "Reception — Villa Biviere Borghese (Lentini) — from 5:30 PM",
      "programme.day2": "Sunday, June 21st, 2026",
      "programme.d2.l1": "Italian Aperitivo — Villa Nunziatina — from 2:00 PM, until evening",
      "programme.hint": "Times are indicative, to help you plan your day comfortably.",

      "dress.title": "Dress code",
      "dress.text": "Theme: butter yellow. Light, refined summer elegance — we kindly suggest soft, bright, harmonious tones.",
      "dress.b1": "Elegant & summer",
      "dress.b2": "Light tones",
      "dress.b3": "Comfortable",
      "dress.note": "We’ll refine details if needed — the key is a gentle harmony, suited to Sicily in June.",

      "travel.kicker": "Travel & stay — Syracuse, Sicily",
      "travel.title": "Travel & stay",
      "travel.lead": "To make your trip easier, here are the essential details.",
      "travel.arrive.title": "Getting to Sicily",
      "travel.arrive.text": "Recommended airport: Catania (CTA)",
      "travel.move.title": "Getting around",
      "travel.move.text": "Car rental is recommended upon arrival in Catania (Europcar, Sicily by Car, Sixt — booking ahead advised).",
      "travel.stay.title": "Where to stay",
      "travel.stay.text": "Lentini — Badiula. Preferential rates with code WeddingAK (valid until March 31st, 2026).",
      "travel.todo.title": "What to do in Sicily",
      "travel.todo.text": "If your schedule allows: a sunset walk in Ortigia, a seaside dinner, and the simple pleasure of taking your time.",
      "travel.cta": "Open RSVP",

      "rsvp.title": "RSVP",
      "rsvp.lead": "Kindly confirm your attendance by April 1st, 2026, to help us organize these days in the best possible way.",
      "rsvp.h2": "RSVP",
      "rsvp.text": "The form lets you indicate your attendance for Saturday June 20th, 2026 and Sunday June 21st, 2026.",
      "rsvp.cta": "Open the form",
      "rsvp.note": "If the link doesn’t open, copy and paste the URL into your browser.",

      "gift.title": "Wedding gift",
      "gift.lead": "Your presence is the greatest gift we could receive.",
      "gift.p1": "Should you wish to honour us with a contribution, a gesture towards our future together would be sincerely appreciated.",
      "gift.p2": "For simplicity, contributions are made exclusively via bank transfer.",
      "gift.iban": "[to be added]",
      "gift.bic": "[to be added]",
      "gift.holderLabel": "Account holder",
      "gift.holder": "[to be added]",
      "gift.note": "We will update this information as soon as possible.",

      "biviere.kicker": "Reception",
      "biviere.title": "Villa Biviere Borghese",
      "biviere.lead": "Lentini — from 5:30 PM (Saturday, June 20th, 2026).",
      "biviere.p1": "The reception will take place in an elegant setting in the Sicilian countryside. We will share dinner and a festive evening together.",
      "biviere.p2": "Practical details (transfers, final timings, access) will be confirmed closer to the date.",
      "biviere.cta": "View the programme",

      "footer.note": "Alice & Kevin — Syracuse, Sicily",
      "footer.legal": "© 2026 — Digital invitation"
    }
  };

  function getStoredLang() {
    const v = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    return supported.includes(v) ? v : "fr";
  }

  function setLangButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = (btn.getAttribute("data-lang") === lang);
      btn.setAttribute("aria-pressed", String(isActive));
    });
    document.documentElement.lang = lang;
  }

  function applyI18n(lang) {
    const map = dict[lang] || dict.fr;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = map[key];
      if (typeof value === "string" && value.length) el.textContent = value;
    });
  }

  function setLanguage(lang) {
    const safe = supported.includes(lang) ? lang : "fr";
    localStorage.setItem(STORAGE_KEY, safe);
    setLangButtons(safe);
    applyI18n(safe);
  }

  // Mobile menu
  function initMobileMenu() {
    const btn = document.querySelector(".menu-btn");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    const close = () => {
      btn.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    };

    const open = () => {
      btn.setAttribute("aria-expanded", "true");
      menu.hidden = false;
    };

    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });

    // close menu on link click
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    // close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  // Init
  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();

    // Bind language buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang) setLanguage(lang);
      });
    });

    // Apply saved language
    setLanguage(getStoredLang());
  });
})();
