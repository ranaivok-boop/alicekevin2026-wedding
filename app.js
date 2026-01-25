(() => {
  const I18N = {
    fr:{
      subtitle:"Samedi 06 juin 2026 — Syracuse, Sicile — Italie",
      baseline:"Ont l’honneur de vous convier à leur mariage.",
      menu_wedding:"Notre mariage",
      menu_details:"Détails",
      menu_rsvp:"RSVP",
      wedding_title:"Notre mariage",
      wedding_lead:"Nous serons très heureux de vous accueillir en Sicile, entourés de nos proches venus du monde entier.",
      wedding_sublead:"Deux jours pensés comme une parenthèse élégante, entre Ortigia et la campagne sicilienne.",
      card_ceremony:"La cérémonie",
      card_ceremony_sub:"Duomo di Siracusa — Ortigia",
      card_reception:"La réception",
      card_reception_sub:"Villa Biviere Borghese — Lentini",
      card_travel:"Voyage & séjour",
      card_travel_sub:"Arriver, se déplacer, se loger",
      card_gift:"Cadeau",
      card_gift_sub:"Un geste pour la suite",
      details_title:"Détails",
      details_lead:"Deux jours pour se retrouver, célébrer, et profiter pleinement de la Sicile.",
      details_fr_title:"Jour 1 — Samedi",
      details_day2_title:"Jour 2 — Dimanche",
      rsvp_title:"RSVP",
      rsvp_lead:"Merci de confirmer votre présence avant le 1er avril 2026.",
      rsvp_box_title:"Répondre au formulaire",
      rsvp_box_text:"Le formulaire vous permet également d’indiquer votre présence au Jour 2.",
      rsvp_button:"Ouvrir le formulaire",
      gift_title:"Cadeau",
      gift_lead:"Votre présence est le plus beau des cadeaux.",
      gift_box_title:"Contribution (IBAN)",
      gift_box_text:"Nous privilégions la discrétion : un simple virement suffit.",
      copy_iban:"Copier",
      footer:"© Alice & Kevin · 2026",
      copied:"IBAN copié"
    },
    it:{ /* version italienne à venir */ },
    en:{ /* version anglaise à venir */ }
  };

  const buttons=document.querySelectorAll(".lang__btn");
  const applyLang=(l)=>{
    const d=I18N[l]||I18N.fr;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k=el.dataset.i18n;
      if(d[k]) el.textContent=d[k];
    });
    buttons.forEach(b=>b.classList.toggle("is-active",b.dataset.lang===l));
  };
  buttons.forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));
  applyLang("fr");

  const copy=document.getElementById("copyIban");
  const val=document.getElementById("ibanValue");
  const toast=document.getElementById("toast");
  if(copy){
    copy.onclick=()=>{
      navigator.clipboard.writeText(val.textContent);
      toast.textContent=I18N.fr.copied;
      setTimeout(()=>toast.textContent="",2000);
    };
  }
})();
