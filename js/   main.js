/* =========================================================
   main.js — Mobile menu + i18n FR/IT/EN + Story carousel
   Fix: language toggle now works everywhere (delegation)
   ========================================================= */

(function () {
  const STORAGE_KEY = "ak_lang";
  const supported = ["fr", "it", "en"];

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
      "home.ctaRsvp": "Confirmer ma présence",
      "home.ctaDetails": "Voir le programme",
      "home.quickTitle": "Informations essentielles",
      "home.quickSubtitle": "Programme, voyage & séjour, RSVP et cadeau — tout au même endroit.",

      "cards.story.title": "Notre histoire",
      "cards.story.desc": "Quelques lignes, quelques images",
      "cards.programme.title": "Programme",
      "cards.programme.desc": "20–21 juin 2026",
      "cards.travel.title": "Voyage & séjour",
      "cards.travel.desc": "Arrivée, déplacements, logement",
      "cards.gift.title": "Cadeau",
      "cards.gift.desc": "Un geste, si vous le souhaitez",

      "story.title": "Notre histoire",
      "story.lead": "Il arrive parfois que la vie choisisse des lieux ordinaires pour y glisser l’extraordinaire. Pour nous, tout a commencé dans un ascenseur — et s’est poursuivi comme un chemin patiemment construit, étage après étage.",
      "story.carousel.title": "Quelques instants, en images",
      "story.slide1.h": "Une rencontre inattendue",
      "story.slide2.h": "Le temps du silence et des signes",
      "story.slide3.h": "Le premier choix",
      "story.slide4.h": "La distance comme révélateur",
      "story.slide5.h": "Le courage d’y croire",
      "story.slide6.h": "Rencontrer une famille",
      "story.slide7.h": "Construire, ensemble",
      "story.lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "story.ctaGift": "Faire un cadeau aux mariés",

      "details.title": "Programme",
      "details.lead": "Le fil conducteur des deux journées, pour vous organiser sereinement.",
      "details.ctaRsvp": "Confirmer ma présence",
      "details.ctaGift": "Faire un cadeau aux mariés",

      "programme.title": "Programme du week-end",
      "programme.day1": "Samedi 20 juin 2026",
      "programme.d1.l1": "Cérémonie religieuse — Duomo di Siracusa (Ortigia) — 11h30",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — 13h00",
      "programme.d1.l3": "Promenade à Ortigia — Découverte libre — 15h00",
      "programme.d1.l4": "Réception — Villa Biviere Borghese (Lentini) — à partir de 17h30",
      "programme.day2": "Dimanche 21 juin 2026",
      "programme.d2.l1": "Apéritivo Italiano — Villa Nunziatina — à partir de 14h00, jusqu’au soir",
      "programme.hint": "Les horaires sont indicatifs, afin de vous permettre d’organiser votre journée en toute sérénité.",

      "dress.title": "Dress code",
      "dress.text": "Une élégance estivale, légère et soignée — merci de privilégier des tons doux, lumineux et harmonieux. (Les demoiselles d’honneur seront en butter yellow.)",
      "dress.note": "L’objectif : une harmonie délicate, en accord avec la Sicile en juin.",
      "dress.palette.title": "Palette conseillée",
      "dress.palette.c1": "Ivoire",
      "dress.palette.c2": "Champagne",
      "dress.palette.c3": "Blush",
      "dress.palette.c4": "Sauge",
      "dress.palette.c5": "Bleu nuit",

      "travel.kicker": "Voyage & séjour — Syracuse, Sicile",
      "travel.title": "Voyage & séjour",
      "travel.lead": "Les informations essentielles, organisées pour vous simplifier la vie.",
      "travel.arrive.title": "Arriver en Sicile",
      "travel.arrive.text": "Aéroport recommandé : Catane (CTA). De là, Syracuse est accessible en voiture (option la plus simple).",
      "travel.move.title": "Se déplacer",
      "travel.move.text": "Location de voiture conseillée dès l’arrivée (réservation anticipée). Sinon : taxi/transfer privé selon les horaires.",
      "travel.stay.title": "Où loger",
      "travel.stay.text": "Zones suggérées : Ortigia (charme, walkable) ou Syracuse (pratique). Pour le dimanche : secteur Lentini/Badiula.",
      "travel.goodtoknow.title": "À savoir",
      "travel.goodtoknow.text": "Prévoyez une tenue légère, une veste fine le soir, et des chaussures confortables pour Ortigia.",
      "travel.todo.title": "Inspirations",
      "travel.todo.text": "Coucher de soleil à Ortigia, dîner en bord de mer, marché local — et le plaisir simple de prendre le temps.",

      "rsvp.title": "RSVP",
      "rsvp.lead": "Merci de confirmer votre présence avant le 1ᵉʳ avril 2026.",
      "rsvp.embedHint": "Si le formulaire ne s’affiche pas, ouvrez-le dans un nouvel onglet.",

      "gift.title": "Cadeau",
      "gift.lead": "Votre présence est, à elle seule, le plus précieux des cadeaux.",
      "gift.p1": "Si vous souhaitez nous témoigner une attention, une contribution à notre avenir commun serait profondément appréciée.",
      "gift.p2": "Par simplicité, les contributions s’effectuent par virement bancaire.",
      "gift.iban": "[à renseigner]",
      "gift.bic": "[à renseigner]",
      "gift.holderLabel": "Titulaire",
      "gift.holder": "[à renseigner]",
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
      "home.ctaRsvp": "Confermare la presenza",
      "home.ctaDetails": "Vedere il programma",
      "home.quickTitle": "Informazioni essenziali",
      "home.quickSubtitle": "Programma, viaggio & soggiorno, RSVP e regalo — tutto nello stesso posto.",

      "cards.story.title": "La nostra storia",
      "cards.story.desc": "Qualche riga, qualche immagine",
      "cards.programme.title": "Programma",
      "cards.programme.desc": "20–21 giugno 2026",
      "cards.travel.title": "Viaggio & soggiorno",
      "cards.travel.desc": "Arrivo, spostamenti, alloggio",
      "cards.gift.title": "Regalo",
      "cards.gift.desc": "Un pensiero, se lo desiderate",

      "story.title": "La nostra storia",
      "story.lead": "A volte la vita sceglie luoghi ordinari per dare inizio a qualcosa di straordinario. Per noi, tutto è cominciato in un ascensore — e poi, passo dopo passo, con calma e intenzione.",
      "story.carousel.title": "Alcuni momenti, in immagini",
      "story.slide1.h": "Un incontro inatteso",
      "story.slide2.h": "Il tempo e i segni",
      "story.slide3.h": "La prima scelta",
      "story.slide4.h": "La distanza che rivela",
      "story.slide5.h": "Il coraggio di crederci",
      "story.slide6.h": "Incontrare una famiglia",
      "story.slide7.h": "Costruire insieme",
      "story.lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "story.ctaGift": "Fare un regalo agli sposi",

      "details.title": "Programma",
      "details.lead": "Il filo conduttore delle due giornate, per organizzarvi con serenità.",
      "details.ctaRsvp": "Confermare la presenza",
      "details.ctaGift": "Fare un regalo agli sposi",

      "programme.title": "Programma del weekend",
      "programme.day1": "Sabato 20 giugno 2026",
      "programme.d1.l1": "Cerimonia religiosa — Duomo di Siracusa (Ortigia) — ore 11:30",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — ore 13:00",
      "programme.d1.l3": "Passeggiata a Ortigia — tempo libero — ore 15:00",
      "programme.d1.l4": "Ricevimento — Villa Biviere Borghese (Lentini) — dalle ore 17:30",
      "programme.day2": "Domenica 21 giugno 2026",
      "programme.d2.l1": "Aperitivo Italiano — Villa Nunziatina — dalle ore 14:00, fino a sera",
      "programme.hint": "Gli orari sono indicativi, per aiutarvi a organizzare la giornata con serenità.",

      "dress.title": "Dress code",
      "dress.text": "Eleganza estiva, leggera e curata — vi chiediamo di privilegiare tonalità chiare, morbide e luminose. (Le damigelle saranno in butter yellow.)",
      "dress.note": "L’obiettivo è un’armonia delicata, in sintonia con la Sicilia a giugno.",
      "dress.palette.title": "Palette consigliata",
      "dress.palette.c1": "Avorio",
      "dress.palette.c2": "Champagne",
      "dress.palette.c3": "Blush",
      "dress.palette.c4": "Salvia",
      "dress.palette.c5": "Blu notte",

      "travel.kicker": "Viaggio & soggiorno — Siracusa, Sicilia",
      "travel.title": "Viaggio & soggiorno",
      "travel.lead": "Le informazioni essenziali, organizzate per semplificarvi la vita.",
      "travel.arrive.title": "Arrivare in Sicilia",
      "travel.arrive.text": "Aeroporto consigliato: Catania (CTA). Da lì, l’opzione più semplice è l’auto.",
      "travel.move.title": "Spostarsi",
      "travel.move.text": "Consigliamo il noleggio auto all’arrivo (prenotazione anticipata). In alternativa: taxi/transfer privato.",
      "travel.stay.title": "Dove alloggiare",
      "travel.stay.text": "Zone suggerite: Ortigia (fascino) o Siracusa (pratico). Per la domenica: zona Lentini/Badiula.",
      "travel.goodtoknow.title": "Da sapere",
      "travel.goodtoknow.text": "Abiti leggeri, una giacca sottile la sera e scarpe comode per Ortigia.",
      "travel.todo.title": "Ispirazioni",
      "travel.todo.text": "Tramonto a Ortigia, cena sul mare, mercato locale — e il piacere semplice di prendersi il tempo.",

      "rsvp.title": "RSVP",
      "rsvp.lead": "Vi chiediamo di confermare la presenza entro il 1° aprile 2026.",
      "rsvp.embedHint": "Se il modulo non si vede, apritelo in una nuova scheda.",

      "gift.title": "Regalo",
      "gift.lead": "La vostra presenza è per noi il dono più prezioso.",
      "gift.p1": "Se lo desiderate, una contribuzione al nostro futuro insieme sarà sinceramente apprezzata.",
      "gift.p2": "Per semplicità, le contribuzioni avvengono tramite bonifico bancario.",
      "gift.iban": "[da inserire]",
      "gift.bic": "[da inserire]",
      "gift.holderLabel": "Intestatario",
      "gift.holder": "[da inserire]",
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
      "home.ctaRsvp": "Confirm attendance",
      "home.ctaDetails": "View programme",
      "home.quickTitle": "Key information",
      "home.quickSubtitle": "Programme, travel & stay, RSVP and gift — everything in one place.",

      "cards.story.title": "Our story",
      "cards.story.desc": "A few lines, a few images",
      "cards.programme.title": "Programme",
      "cards.programme.desc": "June 20–21, 2026",
      "cards.travel.title": "Travel & stay",
      "cards.travel.desc": "Arrival, transport, accommodation",
      "cards.gift.title": "Wedding gift",
      "cards.gift.desc": "A gesture, if you wish",

      "story.title": "Our story",
      "story.lead": "Sometimes life chooses the most ordinary places to begin something extraordinary. For us, it all started in an elevator — and then, patiently, step by step, it became a journey built with intention.",
      "story.carousel.title": "A few moments, in images",
      "story.slide1.h": "An unexpected encounter",
      "story.slide2.h": "Time and signs",
      "story.slide3.h": "The first choice",
      "story.slide4.h": "Distance, revealed",
      "story.slide5.h": "The courage to believe",
      "story.slide6.h": "Meeting a whole family",
      "story.slide7.h": "Building, together",
      "story.lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "story.ctaGift": "Make a wedding gift",

      "details.title": "Programme",
      "details.lead": "The flow of both days, to help you plan with ease.",
      "details.ctaRsvp": "Confirm attendance",
      "details.ctaGift": "Make a wedding gift",

      "programme.title": "Weekend programme",
      "programme.day1": "Saturday, June 20th, 2026",
      "programme.d1.l1": "Religious Ceremony — Duomo di Siracusa (Ortigia) — 11:30 AM",
      "programme.d1.l2": "Aperitivo — Caffè Archimede (Ortigia) — 1:00 PM",
      "programme.d1.l3": "Walk through Ortigia — free time — 3:00 PM",
      "programme.d1.l4": "Reception — Villa Biviere Borghese (Lentini) — from 5:30 PM",
      "programme.day2": "Sunday, June 21st, 2026",
      "programme.d2.l1": "Italian Aperitivo — Villa Nunziatina — from 2:00 PM, until evening",
      "programme.hint": "Times are indicative, to help you plan comfortably.",

      "dress.title": "Dress code",
      "dress.text": "Light, refined summer elegance — we kindly suggest soft, bright, harmonious tones. (Bridesmaids will be in butter yellow.)",
      "dress.note": "The goal: a gentle harmony, suited to Sicily in June.",
      "dress.palette.title": "Suggested palette",
      "dress.palette.c1": "Ivory",
      "dress.palette.c2": "Champagne",
      "dress.palette.c3": "Blush",
      "dress.palette.c4": "Sage",
      "dress.palette.c5": "Midnight blue",

      "travel.kicker": "Travel & stay — Syracuse, Sicily",
      "travel.title": "Travel & stay",
      "travel.lead": "Essential information, curated to make everything easier.",
      "travel.arrive.title": "Getting to Sicily",
      "travel.arrive.text": "Recommended airport: Catania (CTA). From there, driving is the simplest option.",
      "travel.move.title": "Getting around",
      "travel.move.text": "Car rental upon arrival is recommended (book ahead). Alternatively: taxi/private transfer depending on schedules.",
      "travel.stay.title": "Where to stay",
      "travel.stay.text": "Suggested areas: Ortigia (charming, walkable) or Syracuse (practical). For Sunday: Lentini/Badiula area.",
      "travel.goodtoknow.title": "Good to know",
      "travel.goodtoknow.text": "Bring light outfits, a thin jacket for evenings, and comfortable shoes for Ortigia.",
      "travel.todo.title": "Inspiration",
      "travel.todo.text": "Sunset in Ortigia, seaside dinner, local market — and the simple pleasure of taking your time.",

      "rsvp.title": "RSVP",
      "rsvp.lead": "Kindly confirm your attendance by April 1st, 2026.",
      "rsvp.embedHint": "If the form doesn’t display, open it in a new tab.",

      "gift.title": "Wedding gift",
      "gift.lead": "Your presence is the greatest gift we could receive.",
      "gift.p1": "Should you wish to honour us with a contribution, a gesture towards our future together would be sincerely appreciated.",
      "gift.p2": "For simplicity, contributions are made via bank transfer.",
      "gift.iban": "[to be added]",
      "gift.bic": "[to be added]",
      "gift.holderLabel": "Account holder",
      "gift.holder": "[to be added]",
      "gift.note": "We will update this information as soon as possible.",

      "footer.note": "Alice & Kevin — Syracuse, Sicily",
      "footer.legal": "© 2026 — Digital invitation"
    }
  };

  function safeLang(lang) {
    const v = String(lang || "").toLowerCase();
    return supported.includes(v) ? v : "fr";
  }

  function getStoredLang() {
    try {
      return safeLang(localStorage.getItem(STORAGE_KEY));
    } catch {
      return "fr";
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* noop */
    }
  }

  function setLangButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
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
      if (typeof value === "string") el.textContent = value;
    });
  }

  function setLanguage(lang) {
    const l = safeLang(lang);
    setStoredLang(l);
    setLangButtons(l);
    applyI18n(l);
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

    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    // Close on outside click (mobile)
    document.addEventListener("click", (e) => {
      if (menu.hidden) return;
      const t = e.target;
      if (!t) return;
      if (menu.contains(t) || btn.contains(t)) return;
      close();
    });
  }

  // Delegated language switch (fix: works even if buttons are injected/duplicated)
  function initLanguageDelegation() {
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!target) return;
      const btn = target.closest && target.closest(".lang-btn");
      if (!btn) return;
      const lang = btn.getAttribute("data-lang");
      if (!lang) return;
      setLanguage(lang);
    });
  }

  // Story carousel
  function initStoryCarousel() {
    const root = document.querySelector("[data-carousel='story']");
    if (!root) return;

    const track = root.querySelector(".carousel-track");
    const slides = Array.from(root.querySelectorAll(".carousel-slide"));
    const prevBtn = root.querySelector("[data-action='prev']");
    const nextBtn = root.querySelector("[data-action='next']");
    const dotsWrap = root.querySelector(".carousel-dots");

    if (!track || slides.length === 0) return;

    let index = 0;
    let timer = null;
    const AUTOPLAY_MS = 4200;

    function clamp(i) {
      if (i < 0) return slides.length - 1;
      if (i >= slides.length) return 0;
      return i;
    }

    function renderDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      slides.forEach((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "dot-btn";
        b.setAttribute("aria-label", `Slide ${i + 1}`);
        b.setAttribute("aria-pressed", String(i === index));
        b.addEventListener("click", () => goTo(i, true));
        dotsWrap.appendChild(b);
      });
    }

    function update() {
      track.style.transform = `translateX(${-index * 100}%)`;
      if (dotsWrap) {
        dotsWrap.querySelectorAll(".dot-btn").forEach((d, i) => {
          d.setAttribute("aria-pressed", String(i === index));
        });
      }
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function start() {
      stop();
      timer = window.setInterval(() => {
        index = clamp(index + 1);
        update();
      }, AUTOPLAY_MS);
    }

    function goTo(i, restart) {
      index = clamp(i);
      update();
      if (restart) start();
    }

    // Buttons
    if (prevBtn) prevBtn.addEventListener("click", () => goTo(index - 1, true));
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(index + 1, true));

    // Swipe
    let startX = null;
    track.addEventListener("touchstart", (e) => {
      if (!e.touches || !e.touches.length) return;
      startX = e.touches[0].clientX;
      stop();
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      if (startX == null) return;
      const endX = (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientX) || startX;
      const dx = endX - startX;
      startX = null;
      if (Math.abs(dx) > 35) {
        goTo(dx > 0 ? index - 1 : index + 1, true);
      } else {
        start();
      }
    });

    // Pause on hover/focus
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);

    renderDots();
    update();
    start();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initLanguageDelegation();
    setLanguage(getStoredLang());
    initStoryCarousel();
  });
})();
