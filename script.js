const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(18px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
      );
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".feature-row article, .plan-card, .process-panel, .security-copy, .visit-card, .image-band").forEach((node) => {
  node.style.opacity = "0";
  revealObserver.observe(node);
});
