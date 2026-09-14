document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#nav-principale");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- menu mobile ---- */
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- ombre du header une fois défilé ---- */
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- apparition progressive des cartes ---- */
  const revealSelectors = [
    ".vision-card", ".conv-card", ".pillar", ".question-cat", ".sequence li",
    ".stat", ".day-card", ".speaker-card", ".axe-card", ".cal-card",
    ".team-card", ".comite-slot", ".contact-card", ".references-list li",
    ".section-title", ".section-lede", ".pull-quote", ".block-title"
  ];
  const revealItems = document.querySelectorAll(revealSelectors.join(","));

  if (!reduceMotion && "IntersectionObserver" in window) {
    // décalage progressif entre frères d'une même grille
    document.querySelectorAll(
      ".vision-grid, .convergence-grid, .pillars, .questions-grid, .sequence, .stats-row, " +
      ".programme-days, .speakers-grid, .axes-grid, .calendar-grid, .team-grid, " +
      ".comite-placeholder-grid, .contact-layout, .references-list"
    ).forEach((grid) => {
      grid.classList.add("reveal-stagger");
      Array.from(grid.children).forEach((child, i) => child.style.setProperty("--i", i));
    });

    revealItems.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealItems.forEach((el) => io.observe(el));
  }

  /* ---- surlignage de la section active dans le menu ---- */
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const setActive = (id) => {
      navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
    };
    const spy = new IntersectionObserver((entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        .slice(0, 1)
        .forEach((e) => setActive(e.target.id));
    }, { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((s) => spy.observe(s));
  }
});
