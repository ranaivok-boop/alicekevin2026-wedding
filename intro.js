(() => {
  const overlay = document.getElementById("intro-overlay");
  const hint = document.getElementById("intro-hint");

  if (!overlay) return;

  let locked = false;

  const enter = () => {
    if (locked) return;
    locked = true;

    // Premium exit: press feedback + paper fade
    overlay.classList.add("is-exiting");

    // After animation, unlock scroll and remove overlay from the DOM
    window.setTimeout(() => {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");

      overlay.remove();
    }, 650);
  };

  // Click / tap
  overlay.addEventListener("click", enter);

  // Keyboard accessibility
  overlay.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") enter();
  });

  // Subtle press feedback
  overlay.addEventListener("pointerdown", () => overlay.classList.add("is-pressing"));
  overlay.addEventListener("pointerup", () => overlay.classList.remove("is-pressing"));
  overlay.addEventListener("pointercancel", () => overlay.classList.remove("is-pressing"));
  overlay.addEventListener("pointerleave", () => overlay.classList.remove("is-pressing"));

  // Optional: hide hint after first interaction on mobile
  if (hint) {
    overlay.addEventListener("pointerdown", () => hint.classList.add("hide"), { once: true });
  }
})();

