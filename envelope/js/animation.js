/* ------------------------------------------------------------
   A&K — Envelope open animation + scroll reveals
   GSAP timeline (premium, subtle)
------------------------------------------------------------ */

(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const landing = document.getElementById("landing");
  const home = document.getElementById("home");
  const btn = document.getElementById("envelopeButton");

  const topFlap = document.querySelector(".envelope__flap--top");
  const leftFlap = document.querySelector(".envelope__flap--left");
  const rightFlap = document.querySelector(".envelope__flap--right");
  const seal = document.getElementById("seal");
  const sealShadow = document.getElementById("sealShadow");
  const scene = document.getElementById("scene");

  let opened = false;

  // === REDIRECTION VERS LA HOMEPAGE (hors iframe) ===
  function goToHome() {
    // IMPORTANT: window.top pour sortir de l’iframe chargée par index.html racine
    window.top.location.href = "../home.html";
  }

  function showHome() {
    // Si ta page enveloppe contient bien un bloc #home, on le révèle
    // (si #home n’existe pas, on redirige directement)
    if (!home) {
      goToHome();
      return;
    }

    home.hidden = false;

    // Smooth start: fade landing out, home in
    if (landing) {
      gsap.to(landing, {
        duration: 0.6,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => landing.remove()
      });
    }

    gsap.fromTo(home, { opacity: 0 }, { duration: 0.9, opacity: 1, ease: "power2.out" });

    // Scroll reveal (lightweight, no plugin)
    const items = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        gsap.to(e.target, { duration: 0.9, opacity: 1, y: 0, ease: "power2.out" });
        io.unobserve(e.target);
      });
    }, { threshold: 0.14 });

    items.forEach(el => io.observe(el));

    // Après une courte pause (pour laisser la transition être perçue), on redirige
    setTimeout(goToHome, 450);
  }

  function openEnvelope() {
    if (opened) return;
    opened = true;

    if (prefersReducedMotion) {
      showHome();
      return;
    }

    // Initial micro-set for 3D realism
    gsap.set(scene, { transformPerspective: 1200, transformStyle: "preserve-3d" });
    gsap.set([topFlap, leftFlap, rightFlap], { transformStyle: "preserve-3d" });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    // A tiny "breath" to feel alive
    tl.to(scene, { duration: 0.35, scale: 1.01, ease: "power2.out" }, 0);

    // Seal: tactile press + fade
    tl.to(sealShadow, { duration: 0.22, opacity: 0.18, scale: 0.98, ease: "power2.out" }, 0.02);
    tl.to(seal, { duration: 0.18, scale: 0.985, y: 1, ease: "power2.out" }, 0.02);

    tl.to(seal, { duration: 0.38, scale: 0.86, opacity: 0, y: 10, rotation: -3, ease: "power2.in" }, 0.18);
    tl.to(sealShadow, { duration: 0.38, opacity: 0, scale: 0.88, y: 10, ease: "power2.in" }, 0.18);

    // Flaps opening sequence: top first, then sides
    tl.to(topFlap, {
      duration: 0.85,
      rotationX: -165,
      z: 2,
      filter: "saturate(1.02) contrast(1.02) brightness(1.04)",
      ease: "power3.inOut"
    }, 0.30);

    tl.to([leftFlap, rightFlap], {
      duration: 0.95,
      rotationY: (i) => i === 0 ? -145 : 145,
      z: 1,
      ease: "power3.inOut"
    }, 0.44);

    // Subtle light shift
    tl.to(scene, { duration: 0.55, scale: 1.02, ease: "power2.out" }, 0.75);

    // Transition out to homepage
    tl.to(scene, { duration: 0.55, y: 12, opacity: 0, ease: "power2.inOut" }, 1.25);

    // 1) Révèle le home (si présent) pour une transition premium
    // 2) Redirige ensuite vers ../home.html
    tl.add(showHome, 1.35);
  }

  if (btn) {
    btn.addEventListener("click", openEnvelope);
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openEnvelope();
      }
    });
  }
})();
