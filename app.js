(() => {
  // -----------------------------
  // Helpers
  // -----------------------------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const toastEl = $("#toast");
  let toastTimer = null;

  const showToast = (msg) => {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toastEl.classList.remove("is-visible"), 2200);
  };

  // -----------------------------
  // i18n dictionary (FR -> IT -> EN)
  // -----------------------------
  const I18N = {
    fr: {
      // Intro
      intro_hint: "Cliquer pour ouvrir",

      // Nav
      nav_home: "Accueil",
      nav_schedule: "Programme",
      nav_locations: "Lieux",
      nav_travel: "Infos pratiques",
      nav_stay: "Hébergements",
      nav_dress: "Dress code",
      nav_gifts: "Cadeaux",
      nav_faq: "FAQ",
      nav_rsvp: "RSVP",

      // Hero
      hero_kicker: "Save the Date",
      hero_city: "Siracusa, Sicilia",
      hero_date: "20 Juin 2026",
      hero_text: "Une célébration élégante, chaleureuse et intime. Tous les détails arrivent bientôt — gardez cette page en favori.",
      btn_rsvp: "Confirmer sa présence",
      btn_info: "Voir les infos",
      btn_gifts: "Offrir un cadeau",
      hero_note: "Conseil : arrivez idéalement la veille pour profiter de Syracuse et de la Sicile.",

      // Programme
      schedule_title: "Programme",
      schedule_lead: "Les horaires détaillés seront partagés dès finalisation. Voici la structure générale du week-end.",
      schedule_fri_title: "Vendredi",
      schedule_fri_text: "Accueil & dîner informel (optionnel)",
      schedule_sat_title: "Samedi",
      schedule_sat_text: "Cérémonie au Duomo · Réception & soirée",
      schedule_sun_title: "Dimanche",
      schedule_sun_text: "Brunch / au revoir",
      schedule_notice_title: "Astuce élégante",
      schedule_notice_text: "Prévoyez des chaussures confortables : la pierre et les pavés siciliens sont sublimes, et parfois… exigeants.",

      // Lieux
      locations_title: "Lieux",
      locations_lead: "Informations principales des lieux (détails + maps) seront ajoutées au fur et à mesure.",
      loc_ceremony_title: "Cérémonie",
      loc_ceremony_place: "Duomo di Siracusa",
      loc_ceremony_text: "Ortigia — Syracuse",
      loc_ceremony_meta: "Heure & consignes à venir.",
      loc_reception_title: "Réception",
      loc_reception_place: "Lieu de réception",
      loc_reception_text: "À confirmer",
      loc_reception_meta: "Navettes / accès précisés prochainement.",
      loc_brunch_title: "Brunch",
      loc_brunch_place: "Brunch du dimanche",
      loc_brunch_text: "À confirmer",
      loc_brunch_meta: "Optionnel, très recommandé.",

      // Travel
      travel_title: "Infos pratiques",
      travel_lead: "Les informations ci-dessous sont pensées pour rendre votre séjour simple, fluide et agréable.",
      travel_air_title: "Vols",
      travel_air_text: "Aéroports recommandés : Catane (CTA) en priorité. Ensuite Comiso (CIY) selon les vols.",
      travel_car_title: "Location de voiture",
      travel_car_text: "Fortement conseillée pour profiter de la région. Parking et accès seront indiqués par lieu.",
      travel_moves_title: "Déplacements",
      travel_moves_text: "Nous partagerons une recommandation claire : où loger, comment se déplacer, et les meilleurs timings.",
      travel_notice_title: "Conseil",
      travel_notice_text: "Pour une expérience sereine, arrivez la veille et prévoyez votre retour le lendemain du brunch.",

      // Stay
      stay_title: "Hébergements",
      stay_lead: "Nous publierons une short-list d’hébergements (toutes gammes) + zones recommandées.",
      stay_ortigia_title: "Ortigia",
      stay_ortigia_text: "Charme absolu, central, idéal sans voiture. Parfait pour profiter à pied.",
      stay_syracuse_title: "Syracuse",
      stay_syracuse_text: "Plus simple en voiture, options variées, bon compromis.",
      stay_countryside_title: "Campagne",
      stay_countryside_text: "Expérience villa / agriturismo, calme, très “Sicile”.",

      // Dress
      dress_title: "Dress code",
      dress_lead: "Élégant, lumineux, estival. L’idée : une allure soignée, confortable, et harmonieuse sur les photos.",
      dress_palette_title: "Couleurs",
      dress_palette_text: "Tons doux (ivoire, sable, pastel), agrumes, verts. Éviter le total noir.",
      dress_fabric_title: "Matières",
      dress_fabric_text: "Lin, coton, soie — privilégiez des tissus respirants.",
      dress_shoes_title: "Chaussures",
      dress_shoes_text: "Chic + confort : pavés et pierre (Ortigia).",

      // Gifts
      gifts_title: "Cadeaux",
      gifts_lead: "Votre présence est déjà un cadeau. Si vous souhaitez contribuer à notre projet de vie, vous pouvez le faire ici.",
      gifts_headline: "Contribuer en toute simplicité",
      gifts_text: "Nous avons choisi une solution discrète : un virement direct. En un clic, vous copiez l’IBAN.",
      gifts_iban_label: "IBAN",
      gifts_copy: "Copier l’IBAN",
      gifts_reveal: "Afficher / Masquer",
      gifts_note: "Astuce : vous pouvez indiquer “Mariage Alice & Kevin” en libellé.",
      gifts_right_title: "Merci",
      gifts_right_text: "Chaque geste nous touche. Nous vous remercierons personnellement avec plaisir.",

      // FAQ
      faq_title: "FAQ",
      faq_lead: "Les réponses aux questions les plus fréquentes — pensées pour vous faciliter la vie.",
      faq_q1: "À quelle heure faut-il arriver ?",
      faq_a1: "Nous partagerons une heure recommandée_
