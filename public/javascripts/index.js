// ---------- INTRO ANIMATION ----------
gsap.from(".click", { scale: 0.8, opacity: 0, duration: 1.5, ease: "power4.out" });
gsap.to(".click span", { opacity: 0.2, yoyo: true, repeat: -1, duration: 1.2 });

// ---------- CLICK TO ENTER ----------
document.querySelector(".click").addEventListener("click", () => {
  gsap.to(".box1", { y: "-100%", duration: 1.4, ease: "power4.inOut" });
  introTimeline();
});

// ---------- MAIN CONTENT ANIMATION ----------
function introTimeline() {
  const tl = gsap.timeline({ delay: 0.6 });
  tl.from(".heading", { y: 60, opacity: 0, duration: 1, ease: "power4.out" });
  tl.from("#typewriter", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3");
  tl.from(".main p", { y: 30, opacity: 0, duration: 0.8 }, "-=0.3");
  tl.from(".socials", { y: 30, opacity: 0, duration: 0.8 }, "-=0.8");
}

// ---------- TYPEWRITER ----------
const words = ["AI & ML Enthusiast", "Future AI Engineer", "Problem Solver", "Turning Ideas into Code"];
const typeEl = document.getElementById("typewriter");
typeEl.style.minWidth = `${words.reduce((a, b) => a.length > b.length ? a : b).length}ch`;
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];
  if (!isDeleting) {
    charIndex++;
    typeEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) setTimeout(() => isDeleting = true, 900);
  } else {
    charIndex--;
    typeEl.textContent = current.slice(0, charIndex || 1);
    if (charIndex <= 1) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}
typeEffect();
