/*
  Portfolio interactions are intentionally small and framework-free:
  1. Mobile navigation
  2. Header state after scrolling
  3. Active navigation section
  4. Progressive reveal animation
  5. Copy-email utility
*/

// Add a class early so CSS animation rules only apply when JavaScript is running.
document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const navLinks = [...document.querySelectorAll('.nav-panel a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const copyEmailButton = document.querySelector("[data-copy-email]");
const copyMessage = document.querySelector("[data-copy-message]");
const yearElement = document.querySelector("[data-year]");

function setMenu(open) {
  if (!menuToggle || !menu) return;

  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation menu" : "Open navigation menu",
  );
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 980) setMenu(false);
  },
  { passive: true },
);

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Highlight the section closest to the middle of the viewport.
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  },
  {
    rootMargin: "-32% 0px -55% 0px",
    threshold: [0.05, 0.25, 0.5],
  },
);

sections.forEach((section) => sectionObserver.observe(section));

// Reveal content once. The page still works without animation or JavaScript.
const revealElements = document.querySelectorAll("[data-reveal]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

copyEmailButton?.addEventListener("click", async () => {
  const email = "ru8391@gmail.com";

  try {
    await navigator.clipboard.writeText(email);
    copyMessage.textContent = "Email copied to clipboard.";
  } catch (error) {
    // Clipboard permission can be blocked in some browsers or local file previews.
    copyMessage.textContent = `Copy this email: ${email}`;
  }

  window.setTimeout(() => {
    copyMessage.textContent = "";
  }, 3500);
});

if (yearElement) yearElement.textContent = new Date().getFullYear();
