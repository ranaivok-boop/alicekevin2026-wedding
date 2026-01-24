(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const links = document.querySelectorAll(".nav__link");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        links.forEach(l => l.classList.remove("is-active"));
        a.classList.add("is-active");
      });
    });
  }

  const sections = ["home", "schedule", "travel", "rsvp"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`));
  };

  const onScroll = () => {
    let current = "home";
    const offset = 120;

    for (const s of sections) {
      const top = s.getBoundingClientRect().top;
      if (top - offset <= 0) current = s.id;
    }
    setActive(current);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
