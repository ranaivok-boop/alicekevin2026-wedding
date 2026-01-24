(() => {
  // I18N minimal (FR/IT/EN)
  const I18N = {
    fr: {
      intro_hint: "Cliquer pour ouvrir",
      kicker: "Save the Date",
      subtitle: "Syracuse, Sicile · 20 juin 2026",
      hero_text: "Nous serions très heureux de vous avoir à nos côtés pour célébrer ce moment. Vous trouverez ici toutes les informations essentielles.",
      cta_rsvp: "RSVP",
      cta_infos: "Infos pratiques",
      chip_events: "Cérémonie & réception",
      chip_travel: "Accès & séjour",
      chip_gift: "Cadeau / Don",
      events_title: "Cérémonie & réception",
      events_lead: "Les informations ci-dessous seront précisées au fil des confirmations (horaires, navettes, etc.).",
      church_title: "Cérémonie religieuse",
      church_badge: "Duomo di Siracusa",
      church_text: "La cérémonie aura lieu au Duomo (Ortigia). L’horaire exact sera communiqué ici.",
      church_meta_1: "Ortigia · Syracuse",
      church_meta_2: "Tenue élégante",
      reception_title: "Réception",
      reception_badge: "Lieu communiqué bientôt",
      reception_text: "Cocktail, dîner et soirée. Les détails logistiques (transport, horaires) seront ajoutés ici.",
      reception_meta_1: "Syracuse & alentours",
      reception_meta_2: "Ambiance chaleureuse",
      weekend_title: "Le week-end",
      weekend_badge: "Optionnel",
      weekend_text: "Un moment informel pourra être proposé la veille ou le lendemain (selon vos arrivées).",
      weekend_meta_1: "Infos à venir",
      weekend_meta_2: "Selon disponibilités",
      infos_title: "Accès & séjour",
      infos_lead: "Pour profiter sereinement, nous recommandons d’arriver la veille.",
      travel_title: "Venir en Sicile",
      travel_badge: "Recommandation",
      travel_li_1: "Aéroport conseillé : Catane (CTA) · puis ~45–60 min vers Syracuse",
      travel_li_2: "Location de voiture fortement recommandée (flexibilité & confort)",
      travel_li_3: "Si vous logez à Ortigia : privilégiez parking + marche (zones limitées)",
      stay_title: "Où loger",
      stay_badge: "À optimiser",
      stay_li_1: "Option 1 : Ortigia (charme, à pied, mais plus cher)",
      stay_li_2: "Option 2 : Syracuse (pratique, bon rapport qualité-prix)",
      stay_li_3: "Option 3 : alentours (voiture) si vous combinez plage & séjour",
      stay_note: "Nous partagerons une sélection d’adresses fiables dès que possible.",
      rsvp_title: "RSVP",
      rsvp_lead: "Merci de confirmer votre présence dès que possible. Cela nous aide énormément.",
      rsvp_box_title: "Confirmer sa présence",
      rsvp_box_text: "Remplacez le lien ci-dessous par votre Google Form / Typeform.",
      rsvp_button: "Ouvrir le formulaire",
      gift_title: "Cadeau / Don",
      gift_lead: "Votre présence est le plus beau des cadeaux. Si vous souhaitez nous accompagner pour la suite, une contribution est possible en toute simplicité.",
      gift_box_title: "Contribution (IBAN)",
      gift_box_text: "Nous privilégions la discrétion : un simple virement suffit. Merci infiniment.",
      copy_iban: "Copier",
      footer: "© Alice & Kevin · 2026",
      copied: "IBAN copié.",
      copy_fail: "Copie impossible — copiez manuellement."
    },
    it: {
      intro_hint: "Clicca per aprire",
      kicker: "Save the Date",
      subtitle: "Siracusa, Sicilia · 20 giugno 2026",
      hero_text: "Saremmo felici di avervi con noi per celebrare questo momento. Qui trovate tutte le informazioni essenziali.",
      cta_rsvp: "RSVP",
      cta_infos: "Info utili",
      chip_events: "Cerimonia & ricevimento",
      chip_travel: "Viaggio & soggiorno",
      chip_gift: "Regalo / Dono",
      events_title: "Cerimonia & ricevimento",
      events_lead: "Aggiorneremo queste informazioni progressivamente (orari, navette, ecc.).",
      church_title: "Cerimonia religiosa",
      church_badge: "Duomo di Siracusa",
      church_text: "La cerimonia si terrà al Duomo (Ortigia). L’orario preciso sarà comunicato qui.",
      church_meta_1: "Ortigia · Siracusa",
      church_meta_2: "Abbigliamento elegante",
      reception_title: "Ricevimento",
      reception_badge: "Luogo comunicato a breve",
      reception_text: "Aperitivo, cena e festa. I dettagli logistici verranno aggiunti qui.",
      reception_meta_1: "Siracusa e dintorni",
      reception_meta_2: "Atmosfera calorosa",
      weekend_title: "Il weekend",
      weekend_badge: "Opzionale",
      weekend_text: "Potremmo proporre un momento informale il giorno prima o dopo (in base agli arrivi).",
      weekend_meta_1: "Info in arrivo",
      weekend_meta_2: "Secondo disponibilità",
      infos_title: "Viaggio & soggiorno",
      infos_lead: "Per viverla con calma, consigliamo di arrivare il giorno prima.",
      travel_title: "Arrivare in Sicilia",
      travel_badge: "Consiglio",
      travel_li_1: "Aeroporto consigliato: Catania (CTA) · poi ~45–60 min per Siracusa",
      travel_li_2: "Consigliamo vivamente il noleggio auto (comodità e flessibilità)",
      travel_li_3: "Se alloggiate a Ortigia: parcheggio + camminata (ZTL)",
      stay_title: "Dove alloggiare",
      stay_badge: "Da ottimizzare",
      stay_li_1: "Opzione 1: Ortigia (suggestiva, a piedi, più costosa)",
      stay_li_2: "Opzione 2: Siracusa (pratica, ottimo rapporto qualità-prezzo)",
      stay_li_3: "Opzione 3: dintorni (auto) se volete mare e relax",
      stay_note: "Condivideremo presto una selezione di indirizzi affidabili.",
      rsvp_title: "RSVP",
      rsvp_lead: "Grazie per confermare la vostra presenza il prima possibile. Ci aiuta molto.",
      rsvp_box_title: "Confermare la presenza",
      rsvp_box_text: "Sostituite il link qui sotto con il vostro Google Form / Typeform.",
      rsvp_button: "Apri il modulo",
      gift_title: "Regalo / Dono",
      gift_lead: "La vostra presenza è il regalo più bello. Se desiderate, è possibile una contribuzione con semplicità.",
      gift_box_title: "Contributo (IBAN)",
      gift_box_text: "Con discrezione: un semplice bonifico è perfetto. Grazie di cuore.",
      copy_iban: "Copia",
      footer: "© Alice & Kevin · 2026",
      copied: "IBAN copiato.",
      copy_fail: "Copia non riuscita — copia manualmente."
    },
    en: {
      intro_hint: "Click to open",
      kicker: "Save the Date",
      subtitle: "Syracuse, Sicily · June 20, 2026",
      hero_text: "We would be delighted to have you with us to celebrate. You’ll find the essential information here.",
      cta_rsvp: "RSVP",
      cta_infos: "Practical info",
      chip_events: "Ceremony & reception",
      chip_travel: "Travel & stay",
      chip_gift: "Gift / Contribution",
      events_title: "Ceremony & reception",
      events_lead: "We’ll refine these details progressively (times, shuttles, etc.).",
      church_title: "Religious ceremony",
      church_badge: "Duomo di Siracusa",
      church_text: "The ceremony will take place at the Duomo (Ortigia). The exact time will be shared here.",
      church_meta_1: "Ortigia · Syracuse",
      church_meta_2: "Elegant attire",
      reception_title: "Reception",
      reception_badge: "Venue announced soon",
      reception_text: "Cocktail, dinner and party. Logistics will be added here.",
      reception_meta_1: "Syracuse & area",
      reception_meta_2: "Warm atmosphere",
      weekend_title: "The weekend",
      weekend_badge: "Optional",
      weekend_text: "We may suggest a casual moment the day before or after (depending on arrivals).",
      weekend_meta_1: "More soon",
      weekend_meta_2: "Depending on availability",
      infos_title: "Travel & stay",
      infos_lead: "To enjoy it calmly, we recommend arriving the day before.",
      travel_title: "Getting to Sicily",
      travel_badge: "Recommendation",
      travel_li_1: "Suggested airport: Catania (CTA) · then ~45–60 min to Syracuse",
      travel_li_2: "Car rental is strongly recommended (comfort & flexibility)",
      travel_li_3: "If staying in Ortigia: park outside and walk (limited traffic zones)",
      stay_title: "Where to stay",
      stay_badge: "Optimise",
      stay_li_1: "Option 1: Ortigia (charming, walkable, pricier)",
      stay_li_2: "Option 2: Syracuse (practical, great value)",
      stay_li_3: "Option 3: nearby areas (car) if combining beach & stay",
      stay_note: "We’ll share a curated list of reliable places soon.",
      rsvp_title: "RSVP",
      rsvp_lead: "Please confirm your attendance as soon as possible. It helps us a lot.",
      rsvp_box_title: "Confirm attendance",
      rsvp_box_text: "Replace the link below with your Google Form / Typeform.",
      rsvp_button: "Open the form",
      gift_title: "Gift / Contribution",
      gift_lead: "Your presence is the greatest gift. If you’d like to support our next chapter, a simple contribution is possible.",
      gift_box_title: "Contribution (IBAN)",
      gift_box_text: "We keep it discreet: a simple bank transfer is perfect. Thank you very much.",
      copy_iban: "Copy",
      footer: "© Alice & Kevin · 2026",
      copied: "IBAN copied.",
      copy_fail: "Copy failed — please copy manually."
    }
  };

  // INTRO fade
  const overlay = document.getElementById("intro-overlay");
  const enter = () => {
    if (!overlay) return;
    overlay.classList.add("is-exiting");
    window.setTimeout(() => {
      document.documentElement.classList.remove("no-scroll");
      overlay.remove();
    }, 720);
  };
  if (overlay) {
    overlay.addEventListener("click", enter);
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        enter();
      }
    });
  } else {
    document.documentElement.classList.remove("no-scroll");
  }

  // Language
  const langButtons = document.querySelectorAll(".lang__btn");
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
  };
  applyLang("fr");
  langButtons.forEach((btn) => btn.addEventListener("click", () => applyLang(btn.dataset.lang)));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

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
      const active = document.querySelector(".lang__btn.is-active");
      const lang = active ? active.dataset.lang : "fr";
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
