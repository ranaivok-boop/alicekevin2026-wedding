/* =========================================================
   main.js — Mobile menu + i18n FR/IT/EN (localStorage)
   + Story carousel + Gift copy + Tier selection
   ========================================================= */

(function () {
  const STORAGE_KEY = "ak_lang";
  const supported = ["fr", "it", "en"];

  const safeStorage = {
    get(key) {
      try { return localStorage.getItem(key); } catch (_) { return null; }
    },
    set(key, val) {
      try { localStorage.setItem(key, val); } catch (_) {}
    }
  };

  const dict = {
    fr: {
      "a11y.skip": "Aller au contenu principal",

      "nav.home": "Accueil",
      "nav.story": "Notre histoire",
      "nav.details": "Programme",
      "nav.travel": "Voyage & séjour",
      "nav.rsvp": "RSVP",
      "nav.gift": "Cadeau",

      "home.kicker": "Alice & Kevin — Mariage en Sicile",
      "home.invite": "ont l’honneur de vous convier à la célébration de leur union",
      "home.date": "Samedi 20 juin 2026",
      "home.place": "Syracuse, Sicile — Italie",
      "home.intro": "Nous serions profondément heureux de vous accueillir en Sicile pour célébrer ensemble ce moment si précieux. Deux journées, une même intention : partager, entourés de nos proches, une parenthèse de beauté, de douceur et d’élégance.",
      "home.ctaRsvp": "RSVP",
      "home.ctaDetails": "Voir le programme",

      "cards.story.title": "Notre histoire",
      "cards.story.desc": "Le chemin jusqu’à la Sicile",
      "cards.programme.title": "Programme",
      "cards.programme.desc": "20–21 juin 2026",
      "cards.travel.title": "Voyage & séjour",
      "cards.travel.desc": "Arrivée, déplacements, logement",
      "cards.gift.title": "Cadeau",
      "cards.gift.desc": "Un geste, si vous le souhaitez",

      "story.title": "Notre histoire",
      "story.leadFeatured": "Il arrive parfois que la vie choisisse des lieux ordinaires pour y glisser l’extraordinaire. Pour nous, tout a commencé dans un ascenseur — et s’est poursuivi comme un chemin patiemment construit, étage après étage.",
      "story.h1": "Une rencontre inattendue",
      "story.p1": "Février 2019, Singapour. Un ascenseur à l’ESSEC Business School. Rien de spectaculaire, sinon cette intuition silencieuse que quelque chose, ce jour-là, venait de commencer. Une question anodine, un sourire doux et espiègle. Pour Alice, une anecdote. Pour Kevin, une évidence.",
      "story.h2": "Le temps du silence et des signes",
      "story.p2": "Les mois suivants, ils se croisèrent souvent. Un regard, parfois un salut discret. Comme si le silence faisait encore partie du chemin, comme si l’histoire avait besoin de patience pour s’écrire.",
      "story.h3": "Le premier choix",
      "story.p3": "Le 26 avril 2019, lors d’un apéritif à Singapour, le hasard décida de s’effacer. Ils prirent enfin le temps de se parler, longuement. Plus tard, la musique, la danse, et cette sensation simple et rare : celle d’une rencontre qui compte.",
      "story.h4": "La distance comme révélateur",
      "story.p4": "Lorsque la distance s’installa, une évidence apparut : l’absence révèle parfois l’essentiel. Les messages devinrent des appels, les appels des FaceTime. Malgré les fuseaux horaires, une complicité sincère se tissa.",
      "story.h5": "Le courage d’y croire",
      "story.p5": "Kevin fit un choix clair : revenir. Refuser la facilité, choisir la fidélité à ce qu’il ressentait. Peu à peu, la confiance s’installa, et avec elle le bonheur.",
      "story.h6": "Aimer, c’est aussi rencontrer une famille",
      "story.p6": "Aimer, c’est parfois apprendre à aimer une famille entière. Avec le temps, la patience et le dialogue, les incompréhensions s’apaisèrent, et les liens se créèrent.",
      "story.h7": "Construire, ensemble",
      "story.p7": "Les années ont passé. Les familles se sont rapprochées. Les liens se sont renforcés. Leur histoire n’a jamais été une promesse facile, mais un chemin — parfois exigeant, toujours sincère.",
      "story.p8": "Et en ce 20 juin 2026, Alice et Kevin scelleront cet amour patiemment construit, entourés de ceux qui ont compté à chaque étape de leur histoire.",
      "story.ctaProgramme": "Voir le programme",
      "story.ctaGift": "Faire un cadeau aux mariés",

      "details.title": "Programme",
      "details.lead": "Les temps forts du week-end, les lieux, et l’essentiel à retenir.",
      "details.ctaRsvp": "Confirmer ma présence",
      "details.ctaGift": "Faire un cadeau aux mariés",

      "programme.title": "Programme",
      "programme.day1": "Samedi 20 juin 2026",
      "programme.d1.l1": "Cérémonie religieuse — Duomo di Siracusa (Ortigia) — 11h30",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — 13h00",
      "programme.d1.l3": "Promenade à Ortigia — Découverte libre — 15h00",
      "programme.d1.l4": "Réception — Villa Biviere Borghese (Lentini) — à partir de 17h30",
      "programme.day2": "Dimanche 21 juin 2026",
      "programme.d2.l1": "Apéritivo Italiano — Villa Nunziatina — à partir de 14h00, jusqu’au soir",
      "programme.hint": "Les horaires sont indicatifs afin de vous permettre d’organiser votre journée sereinement.",
      "programme.meta1": "Lieu : Ortigia • 11h30",
      "programme.meta2": "Ortigia • 13h00",
      "programme.meta3": "Ortigia • 15h00",
      "programme.meta4": "Lentini • dès 17h30",
      "programme.meta5": "Dès 14h00",

      "dress.title": "Dress code",
      "dress.text": "Harmonie estivale. Une élégance légère et soignée — merci de privilégier des tons doux, lumineux et cohérents.",
      "dress.b1": "Élégant & estival",
      "dress.b2": "Tons doux",
      "dress.b3": "Confortable",
      "dress.note": "L’idée : une harmonie délicate, en accord avec la lumière sicilienne en juin.",

      "maps.duomo": "Duomo di Siracusa (Ortigia)",
      "maps.biviere": "Villa Biviere Borghese (Lentini)",

      "travel.kicker": "Voyage & séjour — Syracuse, Sicile",
      "travel.title": "Voyage & séjour",
      "travel.lead": "Afin de faciliter votre venue, voici les informations clés — simples, claires, et utiles.",
      "travel.arrive.title": "Arriver en Sicile",
      "travel.arrive.text": "Aéroport recommandé : Catane (CTA). C’est l’option la plus simple et la plus directe pour rejoindre Syracuse.",
      "travel.arrive.tip": "Conseil : réserver tôt permet souvent de trouver de meilleurs horaires et tarifs.",
      "travel.move.title": "Se déplacer",
      "travel.move.text": "La location d’un véhicule est fortement recommandée dès votre arrivée à Catane : c’est la solution la plus fluide pour le week-end.",
      "travel.move.tip": "Astuce : privilégiez un véhicule compact (Ortigia) et une réservation anticipée.",
      "travel.stay.title": "Où loger",
      "travel.stay.text": "Zone recommandée : Lentini / alentours (pratique pour la réception). Option suggérée : Badiula.",
      "travel.stay.tip": "Code : WeddingAK (valable jusqu’au 31 mars 2026, selon disponibilités).",
      "travel.todo.title": "À faire en Sicile",
      "travel.todo.text": "Si votre planning le permet : un coucher de soleil à Ortigia, un dîner au bord de l’eau, et le luxe simple de prendre le temps.",
      "travel.todo.tip": "Syracuse se savoure : marchez, respirez, et laissez la lumière faire le reste.",

      "rsvp.kicker": "RSVP",
      "rsvp.title": "Confirmation de présence",
      "rsvp.lead": "Nous vous remercions de bien vouloir confirmer votre présence avant le 1ᵉʳ avril 2026, afin de nous aider à organiser ces journées dans les meilleures conditions.",
      "rsvp.h2": "RSVP",
      "rsvp.text": "Le formulaire vous permettra d’indiquer votre présence : le samedi 20 juin 2026 et le dimanche 21 juin 2026.",
      "rsvp.note": "Si le formulaire ne s’affiche pas correctement, ouvrez-le dans un nouvel onglet via le lien en bas de page.",

      "gift.kicker": "Cadeau",
      "gift.title": "Cadeau aux mariés",
      "gift.lead": "Votre présence à nos côtés sera, à elle seule, le plus précieux des cadeaux.",
      "gift.p1": "Si vous souhaitez nous témoigner une attention, une contribution à notre avenir commun serait profondément appréciée.",
      "gift.p2": "Par souci de simplicité, les contributions s’effectuent exclusivement par virement bancaire.",
      "gift.bankTitle": "Virement bancaire",
      "gift.other": "Autre montant",
      "gift.tierHint": "Ces montants sont des suggestions — choisissez librement ce qui vous ressemble.",
      "gift.iban": "[à renseigner]",
      "gift.bic": "[à renseigner]",
      "gift.holderLabel": "Titulaire",
      "gift.holder": "[à renseigner]",
      "gift.copy": "Copier",
      "gift.note": "Nous mettrons à jour ces informations dès que possible.",

      "footer.note": "Alice & Kevin — Syracuse, Sicile",
      "footer.legal": "© 2026 — Invitation digitale"
    },

    it: {
      "a11y.skip": "Vai al contenuto principale",

      "nav.home": "Home",
      "nav.story": "La nostra storia",
      "nav.details": "Programma",
      "nav.travel": "Viaggio & soggiorno",
      "nav.rsvp": "RSVP",
      "nav.gift": "Regalo",

      "home.kicker": "Alice & Kevin — Matrimonio in Sicilia",
      "home.invite": "hanno l’onore di invitarvi alla celebrazione della loro unione",
      "home.date": "Sabato 20 giugno 2026",
      "home.place": "Siracusa, Sicilia — Italia",
      "home.intro": "Saremmo davvero felici di accogliervi in Sicilia per celebrare insieme questo momento così prezioso. Due giornate, un’unica intenzione: condividere, con le persone a noi care, una parentesi di bellezza, dolcezza ed eleganza.",
      "home.ctaRsvp": "RSVP",
      "home.ctaDetails": "Vedere il programma",

      "cards.story.title": "La nostra storia",
      "cards.story.desc": "Il cammino verso la Sicilia",
      "cards.programme.title": "Programma",
      "cards.programme.desc": "20–21 giugno 2026",
      "cards.travel.title": "Viaggio & soggiorno",
      "cards.travel.desc": "Arrivo, spostamenti, alloggio",
      "cards.gift.title": "Regalo",
      "cards.gift.desc": "Un pensiero, se lo desiderate",

      "story.title": "La nostra storia",
      "story.leadFeatured": "A volte la vita sceglie luoghi ordinari per dare inizio a qualcosa di straordinario. Per noi, tutto è cominciato in un ascensore — e poi, con calma e intenzione, passo dopo passo.",
      "story.h1": "Un incontro inatteso",
      "story.p1": "Febbraio 2019, Singapore. Un ascensore all’ESSEC. Nulla di speciale, se non quella certezza silenziosa: qualcosa stava iniziando. Una domanda semplice, un sorriso leggero. Per Alice, un episodio curioso. Per Kevin, un’evidenza.",
      "story.h2": "Il tempo dei segni",
      "story.p2": "Nei mesi successivi si incrociarono spesso. Uno sguardo, un saluto discreto. Come se la storia avesse bisogno di tempo per scriversi.",
      "story.h3": "La prima scelta",
      "story.p3": "Il 26 aprile 2019, durante un aperitivo a Singapore, decisero finalmente di parlarsi davvero. Poi la musica, la danza, e quella sensazione rara: questo incontro conta.",
      "story.h4": "La distanza che rivela",
      "story.p4": "Con la distanza arrivò chiarezza. I messaggi divennero chiamate, le chiamate FaceTime. Nonostante i fusi orari, la complicità divenne reale.",
      "story.h5": "Il coraggio di crederci",
      "story.p5": "Kevin fece una scelta netta: tornare. Scegliere ciò che sentiva. La fiducia crebbe, e con lei la felicità.",
      "story.h6": "Incontrare una famiglia",
      "story.p6": "Amare significa anche incontrare una famiglia intera. Con pazienza e dialogo, le incomprensioni si sciolsero e i legami nacquero.",
      "story.h7": "Costruire insieme",
      "story.p7": "Gli anni sono passati, le famiglie si sono avvicinate, i legami si sono rafforzati. Non una promessa facile, ma un cammino sincero.",
      "story.p8": "E il 20 giugno 2026, Alice e Kevin uniranno le loro vite nel matrimonio, circondati da chi ha accompagnato ogni passo del loro percorso.",
      "story.ctaProgramme": "Vedere il programma",
      "story.ctaGift": "Fare un regalo agli sposi",

      "details.title": "Programma",
      "details.lead": "I momenti chiave del weekend, i luoghi, e l’essenziale da sapere.",
      "details.ctaRsvp": "Confermare la presenza",
      "details.ctaGift": "Fare un regalo agli sposi",

      "programme.title": "Programma",
      "programme.day1": "Sabato 20 giugno 2026",
      "programme.d1.l1": "Cerimonia religiosa — Duomo di Siracusa (Ortigia) — ore 11:30",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — ore 13:00",
      "programme.d1.l3": "Passeggiata a Ortigia — tempo libero — ore 15:00",
      "programme.d1.l4": "Ricevimento — Villa Biviere Borghese (Lentini) — dalle ore 17:30",
      "programme.day2": "Domenica 21 giugno 2026",
      "programme.d2.l1": "Aperitivo Italiano — Villa Nunziatina — dalle ore 14:00, fino a sera",
      "programme.hint": "Gli orari sono indicativi per aiutarvi a organizzare la giornata con serenità.",
      "programme.meta1": "Ortigia • 11:30",
      "programme.meta2": "Ortigia • 13:00",
      "programme.meta3": "Ortigia • 15:00",
      "programme.meta4": "Lentini • dalle 17:30",
      "programme.meta5": "Dalle 14:00",

      "dress.title": "Dress code",
      "dress.text": "Armonia estiva. Eleganza leggera e curata — vi chiediamo di privilegiare tonalità morbide, luminose e coerenti.",
      "dress.b1": "Elegante & estivo",
      "dress.b2": "Toni delicati",
      "dress.b3": "Comodo",
      "dress.note": "L’idea: un’armonia delicata, in sintonia con la luce siciliana di giugno.",

      "maps.duomo": "Duomo di Siracusa (Ortigia)",
      "maps.biviere": "Villa Biviere Borghese (Lentini)",

      "travel.kicker": "Viaggio & soggiorno — Siracusa, Sicilia",
      "travel.title": "Viaggio & soggiorno",
      "travel.lead": "Per facilitarvi l’arrivo, ecco le informazioni essenziali — chiare e utili.",
      "travel.arrive.title": "Arrivare in Sicilia",
      "travel.arrive.text": "Aeroporto consigliato: Catania (CTA). È l’opzione più semplice per raggiungere Siracusa.",
      "travel.arrive.tip": "Consiglio: prenotare in anticipo aiuta spesso a trovare orari e tariffe migliori.",
      "travel.move.title": "Spostarsi",
      "travel.move.text": "Consigliamo vivamente il noleggio auto già all’arrivo a Catania: è la soluzione più fluida per il weekend.",
      "travel.move.tip": "Suggerimento: auto compatta (Ortigia) e prenotazione anticipata.",
      "travel.stay.title": "Dove alloggiare",
      "travel.stay.text": "Zona consigliata: Lentini / dintorni (comoda per il ricevimento). Opzione suggerita: Badiula.",
      "travel.stay.tip": "Codice: WeddingAK (valido fino al 31 marzo 2026, secondo disponibilità).",
      "travel.todo.title": "Cosa fare in Sicilia",
      "travel.todo.text": "Se il tempo lo permette: tramonto a Ortigia, cena sul mare e il piacere semplice di prendersi il tempo.",
      "travel.todo.tip": "Siracusa si assapora: camminate, respirate e lasciate che la luce faccia il resto.",

      "rsvp.kicker": "RSVP",
      "rsvp.title": "Conferma di presenza",
      "rsvp.lead": "Vi preghiamo di confermare la vostra presenza entro il 1° aprile 2026, per aiutarci a organizzare queste giornate al meglio.",
      "rsvp.h2": "RSVP",
      "rsvp.text": "Il modulo permette di indicare la presenza: sabato 20 giugno 2026 e domenica 21 giugno 2026.",
      "rsvp.note": "Se il modulo non si visualizza correttamente, apritelo in una nuova scheda tramite il link in fondo alla pagina.",

      "gift.kicker": "Regalo",
      "gift.title": "Regalo agli sposi",
      "gift.lead": "La vostra presenza è per noi il dono più prezioso.",
      "gift.p1": "Se lo desiderate, una contribuzione al nostro futuro insieme sarà sinceramente apprezzata.",
      "gift.p2": "Per semplicità, le contribuzioni avvengono esclusivamente tramite bonifico bancario.",
      "gift.bankTitle": "Bonifico bancario",
      "gift.other": "Altro importo",
      "gift.tierHint": "Sono solo suggerimenti — scegliete liberamente ciò che preferite.",
      "gift.iban": "[da inserire]",
      "gift.bic": "[da inserire]",
      "gift.holderLabel": "Intestatario",
      "gift.holder": "[da inserire]",
      "gift.copy": "Copia",
      "gift.note": "Aggiorneremo queste informazioni al più presto.",

      "footer.note": "Alice & Kevin — Siracusa, Sicilia",
      "footer.legal": "© 2026 — Invito digitale"
    },

    en: {
      "a11y.skip": "Skip to main content",

      "nav.home": "Home",
      "nav.story": "Our story",
      "nav.details": "Programme",
      "nav.travel": "Travel & stay",
      "nav.rsvp": "RSVP",
      "nav.gift": "Wedding gift",

      "home.kicker": "Alice & Kevin — Wedding in Sicily",
      "home.invite": "request the honour of your presence at the celebration of their union",
      "home.date": "Saturday, June 20th, 2026",
      "home.place": "Syracuse, Sicily — Italy",
      "home.intro": "We would be truly delighted to welcome you to Sicily to celebrate this precious moment with us. Two days, one intention: to share, with those dearest to us, a moment of beauty, warmth and timeless elegance.",
      "home.ctaRsvp": "RSVP",
      "home.ctaDetails": "View programme",

      "cards.story.title": "Our story",
      "cards.story.desc": "The journey to Sicily",
      "cards.programme.title": "Programme",
      "cards.programme.desc": "June 20–21, 2026",
      "cards.travel.title": "Travel & stay",
      "cards.travel.desc": "Arrival, transport, accommodation",
      "cards.gift.title": "Wedding gift",
      "cards.gift.desc": "A gesture, if you wish",

      "story.title": "Our story",
      "story.leadFeatured": "Sometimes life chooses the most ordinary places to begin something extraordinary. For us, it all started in an elevator — and then, patiently, step by step, it became a journey built with intention.",
      "story.h1": "An unexpected encounter",
      "story.p1": "February 2019, Singapore. An elevator at ESSEC. Nothing spectacular—except that quiet certainty: something was beginning. A simple question, a soft smile. For Alice, a light anecdote. For Kevin, something unmistakable.",
      "story.h2": "Time and signs",
      "story.p2": "In the months that followed, they crossed paths often—an attentive glance, a discreet hello—as if the story needed time to write itself.",
      "story.h3": "The first choice",
      "story.p3": "On April 26th, 2019, during an aperitivo in Singapore, they finally took the time to talk—properly. Then music, dancing, and that rare feeling: this meeting matters.",
      "story.h4": "Distance, revealed",
      "story.p4": "When distance arrived, so did clarity. Messages became calls, calls became FaceTime—despite time zones, closeness grew real.",
      "story.h5": "The courage to believe",
      "story.p5": "Kevin made a clear choice: to come back. To choose what felt true. Trust settled in—and so did happiness.",
      "story.h6": "Meeting a whole family",
      "story.p6": "Love is also learning to love a family. With patience and dialogue, misunderstandings softened and bonds formed.",
      "story.h7": "Building, together",
      "story.p7": "Years passed, families grew closer, bonds strengthened. Not an easy promise—rather a sincere path.",
      "story.p8": "On June 20th, 2026, Alice and Kevin will unite in marriage, surrounded by those who have mattered at every step of their journey.",
      "story.ctaProgramme": "View programme",
      "story.ctaGift": "Give a wedding gift",

      "details.title": "Programme",
      "details.lead": "The weekend highlights, locations, and the essentials to keep in mind.",
      "details.ctaRsvp": "Confirm attendance",
      "details.ctaGift": "Give a wedding gift",

      "programme.title": "Programme",
      "programme.day1": "Saturday, June 20th, 2026",
      "programme.d1.l1": "Religious Ceremony — Duomo di Siracusa (Ortigia) — 11:30 AM",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — 1:00 PM",
      "programme.d1.l3": "Walk through Ortigia — free time — 3:00 PM",
      "programme.d1.l4": "Reception — Villa Biviere Borghese (Lentini) — from 5:30 PM",
      "programme.day2": "Sunday, June 21st, 2026",
      "programme.d2.l1": "Italian Aperitivo — Villa Nunziatina — from 2:00 PM, until evening",
      "programme.hint": "Times are indicative to help you plan your day comfortably.",
      "programme.meta1": "Ortigia • 11:30 AM",
      "programme.meta2": "Ortigia • 1:00 PM",
      "programme.meta3": "Ortigia • 3:00 PM",
      "programme.meta4": "Lentini • from 5:30 PM",
      "programme.meta5": "From 2:00 PM",

      "dress.title": "Dress code",
      "dress.text": "Summer harmony. Light, refined elegance — we kindly suggest soft, bright, cohesive tones.",
      "dress.b1": "Elegant & summer",
      "dress.b2": "Soft tones",
      "dress.b3": "Comfortable",
      "dress.note": "The idea: a gentle harmony, suited to Sicily’s June light.",

      "maps.duomo": "Duomo di Siracusa (Ortigia)",
      "maps.biviere": "Villa Biviere Borghese (Lentini)",

      "travel.kicker": "Travel & stay — Syracuse, Sicily",
      "travel.title": "Travel & stay",
      "travel.lead": "To make your trip easier, here are the essentials — clear and genuinely helpful.",
      "travel.arrive.title": "Getting to Sicily",
      "travel.arrive.text": "Recommended airport: Catania (CTA). It’s the simplest option to reach Syracuse.",
      "travel.arrive.tip": "Tip: booking early often helps secure better times and fares.",
      "travel.move.title": "Getting around",
      "travel.move.text": "Car rental is strongly recommended upon arrival in Catania—by far the smoothest option for the weekend.",
      "travel.move.tip": "Suggestion: choose a compact car (Ortigia) and book ahead.",
      "travel.stay.title": "Where to stay",
      "travel.stay.text": "Recommended area: Lentini / nearby (practical for the reception). Suggested option: Badiula.",
      "travel.stay.tip": "Code: WeddingAK (valid until March 31st, 2026, subject to availability).",
      "travel.todo.title": "What to do in Sicily",
      "travel.todo.text": "If your schedule allows: a sunset walk in Ortigia, a seaside dinner, and the simple pleasure of taking your time.",
      "travel.todo.tip": "Syracuse is best enjoyed slowly—walk, breathe, and let the light do the rest.",

      "rsvp.kicker": "RSVP",
      "rsvp.title": "RSVP",
      "rsvp.lead": "Kindly confirm your attendance by April 1st, 2026, to help us organize these days in the best possible way.",
      "rsvp.h2": "RSVP",
      "rsvp.text": "The form lets you indicate your attendance for Saturday June 20th, 2026 and Sunday June 21st, 2026.",
      "rsvp.note": "If the form doesn’t display correctly, open it in a new tab using the link at the bottom of the page.",

      "gift.kicker": "Wedding gift",
      "gift.title": "Wedding gift",
      "gift.lead": "Your presence is the greatest gift we could receive.",
      "gift.p1": "Should you wish to honour us with a contribution, a gesture towards our future together would be sincerely appreciated.",
      "gift.p2": "For simplicity, contributions are made exclusively via bank transfer.",
      "gift.bankTitle": "Bank transfer",
      "gift.other": "Other amount",
      "gift.tierHint": "These are suggestions only — please choose whatever feels right.",
      "gift.iban": "[to be added]",
      "gift.bic": "[to be added]",
      "gift.holderLabel": "Account holder",
      "gift.holder": "[to be added]",
      "gift.copy": "Copy",
      "gift.note": "We will update this information as soon as possible.",

      "footer.note": "Alice & Kevin — Syracuse, Sicily",
      "footer.legal": "© 2026 — Digital invitation"
    }
  };

  function getStoredLang() {
    const v = (safeStorage.get(STORAGE_KEY) || "").toLowerCase();
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
    safeStorage.set(STORAGE_KEY, safe);
    setLangButtons(safe);
    applyI18n(safe);
  }

  /* ---------------- Mobile menu ---------------- */
  function initMobileMenu() {
    const btn = document.querySelector(".menu-btn");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    const close = () => {
      btn.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      document.body.style.overflow = "";
    };

    const open = () => {
      btn.setAttribute("aria-expanded", "true");
      menu.hidden = false;
      document.body.style.overflow = "hidden";
    };

    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });

    // close on link click
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    // close on backdrop click
    menu.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.getAttribute && target.getAttribute("data-close") === "mobileMenu") close();
    });

    // close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ---------------- Story carousel ---------------- */
  function initStoryCarousel() {
    const track = document.querySelector(".carousel-track");
    const dots = document.querySelectorAll(".dot-btn");
    if (!track || !dots.length) return;

    const slides = Array.from(document.querySelectorAll(".story-slide"));
    const btnPrev = document.querySelector('[data-carousel="prev"]');
    const btnNext = document.querySelector('[data-carousel="next"]');

    let index = 0;

    const clamp = (n) => Math.max(0, Math.min(slides.length - 1, n));

    const render = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d) => d.classList.remove("is-active"));
      dots.forEach((d) => d.setAttribute("aria-selected", "false"));
      const activeDot = document.querySelector(`.dot-btn[data-dot="${index}"]`);
      if (activeDot) {
        activeDot.classList.add("is-active");
        activeDot.setAttribute("aria-selected", "true");
      }
    };

    const go = (i) => {
      index = clamp(i);
      render();
    };

    if (btnPrev) btnPrev.addEventListener("click", () => go(index - 1));
    if (btnNext) btnNext.addEventListener("click", () => go(index + 1));

    dots.forEach((d) => {
      d.addEventListener("click", () => {
        const i = parseInt(d.getAttribute("data-dot") || "0", 10);
        if (!Number.isNaN(i)) go(i);
      });
    });

    // Swipe (mobile)
    let startX = 0;
    let dx = 0;
    const viewport = document.querySelector(".carousel-viewport");
    if (viewport) {
      viewport.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        dx = 0;
      }, { passive: true });

      viewport.addEventListener("touchmove", (e) => {
        dx = e.touches[0].clientX - startX;
      }, { passive: true });

      viewport.addEventListener("touchend", () => {
        if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
      });
    }

    render();
  }

  /* ---------------- Gift page: tiers + copy ---------------- */
  function initGift() {
    const tierButtons = document.querySelectorAll(".tier-btn");
    const toast = document.querySelector(".gift-toast");
    const copyButtons = document.querySelectorAll(".copy-btn");
    if (!tierButtons.length && !copyButtons.length) return;

    tierButtons.forEach((b) => {
      b.addEventListener("click", () => {
        tierButtons.forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");

        if (toast) {
          const val = b.getAttribute("data-tier") || "";
          toast.textContent = (val === "other")
            ? "Vous pouvez choisir librement le montant."
            : `Suggestion sélectionnée : ${val} €`;
          setTimeout(() => { toast.textContent = ""; }, 2400);
        }
      });
    });

    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // fallback
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          const ok = document.execCommand("copy");
          document.body.removeChild(ta);
          return ok;
        } catch (__) {
          return false;
        }
      }
    }

    copyButtons.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const key = btn.getAttribute("data-copy");
        if (!key) return;
        const span = document.querySelector(`[data-clip="${key}"]`);
        const text = span ? (span.textContent || "").trim() : "";
        if (!text) return;

        const ok = await copyText(text);
        if (toast) {
          toast.textContent = ok ? "Copié." : "Impossible de copier automatiquement.";
          setTimeout(() => { toast.textContent = ""; }, 2000);
        }
      });
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();

    // Language buttons: event delegation (robust)
    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      const btn = t.closest(".lang-btn");
      if (!btn) return;
      const lang = btn.getAttribute("data-lang");
      if (lang) setLanguage(lang);
    });

    setLanguage(getStoredLang());

    initStoryCarousel();
    initGift();
  });
})();
