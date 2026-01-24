(() => {
  const intro = document.getElementById("intro");
  const fade = document.getElementById("fadeOverlay");
  const hint = document.getElementById("introHint");

  if (!intro || !fade) return;

  let locked = false;

  // ✅ Change this if your homepage file is different
  const TARGET = "./home.html";

  const enter = () => {
    if (locked) return;
    locked = true;

    // Hide hint instantly after first interaction (premium)
    if (hint) hint.classList.add("hide");

    // Trigger exit animations (image lift + paper fade)
    intro.classList.add("is-exiting");
    fade.style.opacity = "1";

    // Navigate after the fade completes
    window.setTimeout(() => {
      window.location.href = TARGET;
    }, 520);
  };

  // Click / tap
  intro.addEventListener("click", enter);

  // Keyboard accessibility
  intro.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      enter();
    }
  });

  // Subtle press feedback
  intro.addEventListener("pointerdown", () => intro.classList.add("is-pressing"));
  intro.addEventListener("pointerup", () => intro.classList.remove("is-pressing"));
  intro.addEventListener("pointercancel", () => intro.classList.remove("is-pressing"));
  intro.addEventListener("pointerleave", () => intro.classList.remove("is-pressing"));
})();
