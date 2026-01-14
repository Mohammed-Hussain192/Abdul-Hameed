// Register plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

// Elements
const btn = document.querySelector(".btn");
const aboutSection = document.querySelector(".about");

// Split text
const split = SplitText.create(".pi", { type: "chars,words,lines" });

/* ===============================
   BUTTON CLICK ANIMATION
================================ */
btn.addEventListener("click", () => {
  gsap.to(aboutSection, {
    y: "-100vh",
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      aboutSection.style.display = "none";

      gsap.from(split.words, {
        y: 60,
        opacity: 0,
        autoAlpha: 0,
        stagger: 0.05,
        
        
      });
    }
  });
});

/* ===============================
   PAGE LOAD ANIMATIONS
================================ */
window.onload = () => {
  gsap.from(".rt", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(".rtt", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.6,
    ease: "power2.out"
  });

  gsap.from(".btn", {
    opacity: 0,
    y: -40,
    duration: 0.8,
    delay: 1.2,
    ease: "power2.out",
    onComplete: () => {
      gsap.to(".btn", {
        y: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  });
};

/* ===============================
   SCROLLTRIGGER TEXT ANIMATION
================================ */
gsap.to(".animate-text", {
  x: "-205%",
  ease: "none",
  scrollTrigger: {
    trigger: ".main2",
    start: "top top",
    end: "top -120%",
    scrub: 2,
    pin: true,
    markers: false
  }
});
