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

  function showHome() {
    home.hidden = false;

    // Smooth start: fade landing out, home in
    gsap.to(landing, { duration: .6, opacity: 0, ease: "power2.out", onComplete: () => landing.remove() });
    gsap.fromTo(home, { opacity: 0 }, { duration: .9, opacity: 1, ease: "power2.out" });

    // Scroll reveal (lightweight, no plugin)
    const items = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        gsap.to(e.target, { duration: .9, opacity: 1, y: 0, ease: "power2.out" });
        io.unobserve(e.target);
      });
    }, { threshold: 0.14 });

    items.forEach(el => io.observe(el));
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
    tl.to(scene, { duration: .35, scale: 1.01, ease: "power2.out" }, 0);

    // Seal: tactile press + fade
    tl.to(sealShadow, { duration: .22, opacity: .18, scale: .98, ease: "power2.out" }, 0.02);
    tl.to(seal, { duration: .18, scale: .985, y: 1, ease: "power2.out" }, 0.02);

    tl.to(seal, { duration: .38, scale: .86, opacity: 0, y: 10, rotation: -3, ease: "power2.in" }, 0.18);
    tl.to(sealShadow, { duration: .38, opacity: 0, scale: .88, y: 10, ease: "power2.in" }, 0.18);

    // Flaps opening sequence: top first, then sides
    tl.to(topFlap, {
      duration: .85,
      rotationX: -165,
      z: 2,
      filter: "saturate(1.02) contrast(1.02) brightness(1.04)",
      ease: "power3.inOut"
    }, 0.30);

    tl.to([leftFlap, rightFlap], {
      duration: .95,
      rotationY: (i) => i === 0 ? -145 : 145,
      z: 1,
      ease: "power3.inOut"
    }, 0.44);

    // Subtle light shift
    tl.to(scene, { duration: .55, scale: 1.02, ease: "power2.out" }, 0.75);

    // Transition out to homepage
    tl.to(scene, { duration: .55, y: 12, opacity: 0, ease: "power2.inOut" }, 1.25);
    tl.add(showHome, 1.35);
  }

  btn.addEventListener("click", openEnvelope);
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEnvelope();
    }
  });
})();
