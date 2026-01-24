const supported = ["fr","en","it"];
const key = "wedding_lang";

function setLang(lang){
  if(!supported.includes(lang)) lang = "fr";
  localStorage.setItem(key, lang);

  document.querySelectorAll("[data-lang]").forEach(el=>{
    el.style.display = (el.getAttribute("data-lang") === lang) ? "" : "none";
  });

  document.querySelectorAll("[data-set-lang]").forEach(a=>{
    a.classList.toggle("active", a.getAttribute("data-set-lang") === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-set-lang]").forEach(a=>{
    a.addEventListener("click", (e)=>{
      e.preventDefault();
      setLang(a.getAttribute("data-set-lang"));
    });
  });

  setLang(localStorage.getItem(key) || "fr");
});
