(() => {
  const intro = document.getElementById("intro");
  const fade = document.getElementById("fadeOverlay");
  const hint = document.getElementById("introHint");

  if (!intro || !fade) return;

  let locked = false;

  // 👉 destination finale (TON SITE)
  const TARGET = "./envelope/";

  const enter = () => {
    if (locked) return;
    locked = true;

    if (hint) hint.classList.add("hide");

    intro.classList.add("is-exiting");
    fade.style.opacity = "1";

    setTimeout(() => {
      window.location.href = TARGET;
    }, 520);
  };

  intro.addEventListener("click", enter);

  intro.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      enter();
    }
  });
})();
