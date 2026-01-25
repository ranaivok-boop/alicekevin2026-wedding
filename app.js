(() => {
  // ===========
  // CONFIG
  // ===========
  // Mets ici l'URL EMBED (pas le forms.gle)
  // Exemple: https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true
  const FORM_EMBED_URL = "PASTE_YOUR_GOOGLE_FORM_EMBED_URL_HERE";

  const I18N = {
    fr: {
      // Global
      skip: "Aller au contenu",
      nav_home: "Notre mariage",
      nav_details: "Détails",
      nav_rsvp: "RSVP",
      nav_gift: "Cadeau",
      nav_biviere: "Le domaine",

      // SEO / Hero (Home)
      seo_h1: "Alice & Kevin — Mariage en Sicile",
      hero_baseline: "ont l’honneur de vous convier à la célébration de leur union",
      hero_date: "Samedi 6 juin 2026",
      hero_place: "Syracuse, Sicile — Italie",

      // Home section
      home_title: "Notre mariage",
      home_p1:
        "Nous serions profondément honorés de vous accueillir en Sicile afin de partager avec vous ces deux journées de célébration, entourés de nos familles et de nos amis venus du monde entier.",
      home_p2:
        "Ce mariage en Sicile est pour nous l’occasion de réunir celles et ceux qui nous sont chers dans un cadre chargé d’histoire, de lumière et d’élégance.",

      card_ceremony: "Cérémonie",
      card_ceremony_sub: "Duomo di Siracusa — Ortigia",
      card_reception: "Réception",
      card_reception_sub: "Villa Biviere Borghese — Lentini",
      card_travel: "Voyage & séjour",
      card_travel_sub: "Arriver, se déplacer, se loger",
      card_gift: "Cadeau",
      card_gift_sub: "Un geste pour l’avenir",

      // Details page
      details_title: "Détails",
      details_lead: "Déroulé de la journée · Samedi 6 juin 2026",

      // Day 1 blocks
      d1_ceremony_title: "Cérémonie religieuse",
      d1_ceremony_place: "Duomo di Siracusa — Ortigia",
      d1_ceremony_time: "11h30",

      d1_aperitivo_title: "Aperitivo italien",
      d1_aperitivo_place: "Caffè Archimede — Ortigia",
      d1_aperitivo_time: "13h00",

      d1_walk_title: "Promenade à Ortigia",
      d1_walk_place: "Découverte libre du centre historique",
      d1_walk_time: "15h00",

      d1_reception_title: "Réception",
      d1_reception_place: "Villa Biviere Borghese — Lentini",
      d1_reception_time: "À partir de 17h30",

      // Day 2
      d2_title: "Apéritivo Italiano · Dimanche 7 juin 2026",
      d2_p:
        "Le dimanche, nous serons ravis de prolonger les festivités autour d’un Apéritivo Italiano, dans une atmosphère détendue, conviviale et typiquement sicilienne.",
      d2_place: "Villa Nunziatina",
      d2_time: "À partir de 14h00 et jusqu’au soir",

      // Travel
      travel_title: "Voyage & séjour en Sicile",
      travel_intro:
        "Nos invités viendront des quatre coins du monde — Europe, Amériques, Asie et Moyen-Orient — et nous sommes ravis de vous accueillir à Syracuse pour ce mariage en Sicile.",
      airport_title: "Aéroport recommandé",
      airport_text: "Aéroport de Catane (CTA)",
      car_title: "Location de voiture",
      car_text:
        "La location d’un véhicule est vivement recommandée dès votre arrivée à l’aéroport de Catane. (Europcar, Sicily by Car, Sixt — réservation anticipée conseillée)",
      stay_title: "Hébergement conseillé",
      stay_text:
        "Lentini — Badiula · Tarifs préférentiels avec le code “WeddingAK” (valable jusqu’au 31 mars 2026).",

      // Kids
      kids_title: "Enfants",
      kids_text_1:
        "Afin de garantir une organisation harmonieuse et de permettre à chacun de profiter pleinement de ces journées, nous avons choisi de célébrer notre mariage sans la présence d’enfants.",
      kids_text_2:
        "Le domaine ne disposant pas de service de garde, cette décision facilitera également le travail de nos équipes (photographes, vidéastes et prestataires). Nous vous remercions sincèrement de votre compréhension.",

      // Gift
      gift_title: "Cadeau aux mariés",
      gift_text_1:
        "Votre présence à nos côtés sera, à elle seule, le plus précieux des cadeaux. Si toutefois vous souhaitiez nous témoigner une attention particulière, une contribution à notre avenir commun serait profondément appréciée.",
      gift_text_2:
        "Les contributions s’effectuent exclusivement par virement bancaire, via l’IBAN indiqué ci-dessous.",
      iban_label: "IBAN",
      copy_iban: "Copier",
      copied: "IBAN copié.",
      copy_fail: "Copie impossible — copiez manuellement.",

      // RSVP page
      rsvp_title: "RSVP · Confirmation de présence",
      rsvp_lead:
        "Nous vous remercions de bien vouloir confirmer votre présence via le formulaire ci-dessous avant le 1ᵉʳ avril 2026. Le formulaire vous permettra également d’indiquer votre participation à la journée du dimanche.",
      rsvp_cta: "Confirmer ma présence",
      rsvp_alt:
        "Si le formulaire ne s’affiche pas sur votre appareil, vous pouvez l’ouvrir dans un nouvel onglet.",

      // Biviere page
      biviere_title: "Villa Biviere Borghese",
      biviere_meta: "Lentini — Sicile",
      biviere_intro:
        "Nous avons choisi ce domaine pour son élégance discrète, sa douceur de vivre et sa capacité à accueillir nos invités dans un cadre serein, authentiquement sicilien.",
      open_maps: "Ouvrir sur Google Maps",
    },

    it: {
      skip: "Vai al contenuto",
      nav_home: "Il nostro matrimonio",
      nav_details: "Dettagli",
      nav_rsvp: "RSVP",
      nav_gift: "Regalo",
      nav_biviere: "La location",

      seo_h1: "Alice & Kevin — Matrimonio in Sicilia",
      hero_baseline: "hanno l’onore di invitarvi alla celebrazione della loro unione",
      hero_date: "Sabato 6 giugno 2026",
      hero_place: "Siracusa, Sicilia — Italia",

      home_title: "Il nostro matrimonio",
      home_p1:
        "Saremmo profondamente onorati di accogliervi in Sicilia per condividere con voi queste due giornate di celebrazione, circondati dalle nostre famiglie e dagli amici provenienti da tutto il mondo.",
      home_p2:
        "Questo matrimonio in Sicilia rappresenta per noi un momento unico, in una terra ricca di storia, luce ed eleganza.",

      card_ceremony: "Cerimonia",
      card_ceremony_sub: "Duomo di Siracusa — Ortigia",
      card_reception: "Ricevimento",
      card_reception_sub: "Villa Biviere Borghese — Lentini",
      card_travel: "Viaggio & soggiorno",
      card_travel_sub: "Arrivare, spostarsi, alloggiare",
      card_gift: "Regalo",
      card_gift_sub: "Un gesto per il futuro",

      details_title: "Dettagli",
      details_lead: "Programma · Sabato 6 giugno 2026",

      d1_ceremony_title: "Cerimonia religiosa",
      d1_ceremony_place: "Duomo di Siracusa — Ortigia",
      d1_ceremony_time: "Ore 11:30",

      d1_aperitivo_title: "Aperitivo italiano",
      d1_aperitivo_place: "Caffè Archimede — Ortigia",
      d1_aperitivo_time: "Ore 13:00",

      d1_walk_title: "Passeggiata a Ortigia",
      d1_walk_place: "Scoperta libera del centro storico",
      d1_walk_time: "Ore 15:00",

      d1_reception_title: "Ricevimento",
      d1_reception_place: "Villa Biviere Borghese — Lentini",
      d1_reception_time: "Dalle ore 17:30",

      d2_title: "Apéritivo Italiano · Domenica 7 giugno 2026",
      d2_p:
        "La domenica saremo felici di prolungare i festeggiamenti con un Apéritivo Italiano, in un’atmosfera rilassata, conviviale e autenticamente siciliana.",
      d2_place: "Villa Nunziatina",
      d2_time: "Dalle ore 14:00 fino a sera",

      travel_title: "Viaggio & soggiorno in Sicilia",
      travel_intro:
        "I nostri ospiti arriveranno da tutto il mondo e siamo lieti di accogliervi a Siracusa per questo matrimonio in Sicilia.",
      airport_title: "Aeroporto consigliato",
      airport_text: "Aeroporto di Catania (CTA)",
      car_title: "Noleggio auto",
      car_text:
        "Il noleggio di un’auto è fortemente consigliato fin dall’arrivo all’aeroporto di Catania. (Europcar, Sicily by Car, Sixt — prenotazione anticipata consigliata)",
      stay_title: "Alloggio consigliato",
      stay_text:
        "Lentini — Badiula · Tariffe preferenziali con il codice “WeddingAK” (valido fino al 31 marzo 2026).",

      kids_title: "Bambini",
      kids_text_1:
        "Per garantire un’organizzazione armoniosa e permettere a tutti di godere appieno delle celebrazioni, abbiamo scelto di celebrare il nostro matrimonio senza la presenza di bambini.",
      kids_text_2:
        "La location non dispone di un servizio di babysitting e questa scelta faciliterà inoltre il lavoro dei nostri team e fornitori. Vi ringraziamo per la vostra comprensione.",

      gift_title: "Regalo per gli sposi",
      gift_text_1:
        "La vostra presenza sarà per noi il dono più prezioso. Qualora desideraste farci un pensiero, una contribuzione al nostro futuro insieme sarà sinceramente apprezzata.",
      gift_text_2:
        "Le contribuzioni avvengono esclusivamente tramite bonifico bancario, utilizzando l’IBAN indicato di seguito.",
      iban_label: "IBAN",
      copy_iban: "Copia",
      copied: "IBAN copiato.",
      copy_fail: "Copia non riuscita — copia manualmente.",

      rsvp_title: "RSVP · Conferma di partecipazione",
      rsvp_lead:
        "Vi preghiamo di confermare la vostra presenza tramite il modulo sottostante entro il 1° aprile 2026. Il modulo consentirà inoltre di indicare la partecipazione alla giornata di domenica.",
      rsvp_cta: "Confermare la presenza",
      rsvp_alt:
        "Se il modulo non si visualizza sul vostro dispositivo, potete aprirlo in una nuova scheda.",

      biviere_title: "Villa Biviere Borghese",
      biviere_meta: "Lentini — Sicilia",
      biviere_intro:
        "Abbiamo scelto questa location per la sua eleganza discreta, la sua atmosfera e la capacità di accogliere i nostri ospiti in un contesto autenticamente siciliano.",
      open_maps: "Apri su Google Maps",
    },

    en: {
      skip: "Skip to content",
      nav_home: "Our wedding",
      nav_details: "Details",
      nav_rsvp: "RSVP",
      nav_gift: "Gift",
      nav_biviere: "The venue",

      seo_h1: "Alice & Kevin — Wedding in Sicily",
      hero_baseline: "request the honour of your presence at the celebration of their union",
      hero_date: "Saturday, June 6th, 2026",
      hero_place: "Syracuse, Sicily — Italy",

      home_title: "Our wedding",
      home_p1:
        "We would be deeply honoured to welcome you to Sicily to share these two days of celebration, surrounded by our families and friends from around the world.",
      home_p2:
        "This wedding in Sicily is a unique opportunity for us to gather our loved ones in a place filled with history, light and timeless elegance.",

      card_ceremony: "Religious ceremony",
      card_ceremony_sub: "Duomo di Siracusa — Ortigia",
      card_reception: "Reception",
      card_reception_sub: "Villa Biviere Borghese — Lentini",
      card_travel: "Travel & stay",
      card_travel_sub: "Arrival, transport, accommodation",
      card_gift: "Wedding gift",
      card_gift_sub: "A gesture for what’s next",

      details_title: "Details",
      details_lead: "Wedding Day · Saturday, June 6th, 2026",

      d1_ceremony_title: "Religious ceremony",
      d1_ceremony_place: "Duomo di Siracusa — Ortigia",
      d1_ceremony_time: "11:30 AM",

      d1_aperitivo_title: "Italian Aperitivo",
      d1_aperitivo_place: "Caffè Archimede — Ortigia",
      d1_aperitivo_time: "1:00 PM",

      d1_walk_title: "Walk through Ortigia",
      d1_walk_place: "Free time to explore the historic centre",
      d1_walk_time: "3:00 PM",

      d1_reception_title: "Reception",
      d1_reception_place: "Villa Biviere Borghese — Lentini",
      d1_reception_time: "From 5:30 PM",

      d2_title: "Italian Aperitivo · Sunday, June 7th, 2026",
      d2_p:
        "On Sunday, we will be delighted to extend the celebration with an Italian Aperitivo, in a relaxed, convivial and authentically Sicilian atmosphere.",
      d2_place: "Villa Nunziatina",
      d2_time: "From 2:00 PM until the evening",

      travel_title: "Travel & stay in Sicily",
      travel_intro:
        "Our guests will be travelling from all over the world, and we are delighted to welcome you to Syracuse for this wedding in Sicily.",
      airport_title: "Recommended airport",
      airport_text: "Catania Airport (CTA)",
      car_title: "Car rental",
      car_text:
        "Renting a car is strongly recommended upon arrival at Catania Airport. (Europcar, Sicily by Car, Sixt — early booking advised)",
      stay_title: "Recommended accommodation",
      stay_text:
        "Lentini — Badiula · Preferential rates with the code “WeddingAK” (valid until March 31st, 2026).",

      kids_title: "Children",
      kids_text_1:
        "To ensure a smooth organisation and allow everyone to fully enjoy the celebration, we have chosen to celebrate our wedding without children.",
      kids_text_2:
        "As the venue does not offer childcare services, this decision will also facilitate the work of our teams and service providers. Thank you very much for your understanding.",

      gift_title: "Wedding gift",
      gift_text_1:
        "Your presence is the greatest gift we could receive. Should you wish to honour us with a contribution, a gesture towards our future together would be sincerely appreciated.",
      gift_text_2:
        "Contributions are made exclusively via bank transfer, using the IBAN provided below.",
      iban_label: "IBAN",
      copy_iban: "Copy",
      copied: "IBAN copied.",
      copy_fail: "Copy failed — please copy manually.",

      rsvp_title: "RSVP · Attendance confirmation",
      rsvp_lead:
        "Kindly confirm your attendance using the form below by April 1st, 2026. The form will also allow you to indicate your presence on Sunday.",
      rsvp_cta: "RSVP",
      rsvp_alt:
        "If the form doesn’t display on your device, you can open it in a new tab.",

      biviere_title: "Villa Biviere Borghese",
      biviere_meta: "Lentini — Sicily",
      biviere_intro:
        "We chose this venue for its discreet elegance, its atmosphere, and its ability to welcome our guests in a serene, authentically Sicilian setting.",
      open_maps: "Open in Google Maps",
    }
  };

  const langButtons = document.querySelectorAll(".lang__btn");
  const getSaved = () => localStorage.getItem("ak_lang") || "fr";

  const applyLang = (lang) => {
    const dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;

    langButtons.forEach((b) => {
      const isActive = b.dataset.lang === lang;
      b.classList.toggle("is-active", isActive);
      b.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // RSVP embed url
    const iframe = document.querySelector("[data-form-embed]");
    const openLink = document.querySelector("[data-form-open]");
    if (iframe && FORM_EMBED_URL && FORM_EMBED_URL !== "PASTE_YOUR_GOOGLE_FORM_EMBED_URL_HERE") {
      iframe.setAttribute("src", FORM_EMBED_URL);
    }
    if (openLink && FORM_EMBED_URL && FORM_EMBED_URL !== "PASTE_YOUR_GOOGLE_FORM_EMBED_URL_HERE") {
      // version non-embed (on enlève embedded=true si présent)
      const clean = FORM_EMBED_URL.replace("embedded=true", "").replace(/[?&]$/, "");
      openLink.setAttribute("href", clean);
    }

    localStorage.setItem("ak_lang", lang);
  };

  // init
  applyLang(getSaved());
  langButtons.forEach((btn) => btn.addEventListener("click", () => applyLang(btn.dataset.lang)));

  // Copy IBAN
  const copyBtn = document.getElementById("copyIban");
  const ibanEl = document.getElementById("ibanValue");
  const toast = document.getElementById("toast");

  const toastMsg = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    window.setTimeout(() => (toast.textContent = ""), 2200);
  };

  if (copyBtn && ibanEl) {
    copyBtn.addEventListener("click", async () => {
      const lang = getSaved();
      const dict = I18N[lang] || I18N.fr;
      const iban = ibanEl.textContent.trim();

      try {
        await navigator.clipboard.writeText(iban);
        toastMsg(dict.copied);
      } catch {
        toastMsg(dict.copy_fail);
      }
    });
  }
})();
