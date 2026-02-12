/* ===============================
   NAVBAR + MOBILE MENU (FIXED)
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

});


/* ===============================
   RECOGNITION SLIDER
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("recognitionTrack");
  if (!track) return;

  const speed = 0.6;
  const logos = [...track.children];
  logos.forEach(logo => track.appendChild(logo.cloneNode(true)));

  let x = 0;
  let paused = false;

  function animate() {
    if (!paused) {
      x -= speed;
      if (Math.abs(x) >= track.scrollWidth / 2) x = 0;
      track.style.transform = `translateX(${x}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();
});


/* ===============================
   STAR ALUMNI CAROUSEL
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".alumni-card");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  if (!track || cards.length === 0) return;

  const gap = 40;
  const cardWidth = cards[0].getBoundingClientRect().width + gap;
  const totalCards = cards.length;

  let index = 0;
  let isTransitioning = false;

  cards.forEach(card => track.appendChild(card.cloneNode(true)));

  function moveSlide(animate = true) {
    track.style.transition = animate ? "transform 0.8s ease" : "none";
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    index++;
    moveSlide();

    if (index === totalCards) {
      setTimeout(() => {
        index = 0;
        moveSlide(false);
        isTransitioning = false;
      }, 600);
    } else {
      setTimeout(() => isTransitioning = false, 600);
    }
  }

  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (index === 0) {
      index = totalCards;
      moveSlide(false);
      setTimeout(() => {
        index--;
        moveSlide();
        isTransitioning = false;
      }, 20);
    } else {
      index--;
      moveSlide();
      setTimeout(() => isTransitioning = false, 600);
    }
  }

  nextBtn?.addEventListener("click", nextSlide);
  prevBtn?.addEventListener("click", prevSlide);

  setInterval(nextSlide, 3000);
});


/* ===============================
   INDUSTRIAL COLLAB SLIDER
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const SPEED = 0.45;

  function initRow(row, direction) {
    if (!row) return;

    const items = [...row.children];
    items.forEach(item => row.appendChild(item.cloneNode(true)));

    let x = direction === "right" ? -row.scrollWidth / 2 : 0;

    function animate() {
      x += direction === "right" ? SPEED : -SPEED;

      if (direction === "right" && x >= 0) x = -row.scrollWidth / 2;
      if (direction === "left" && Math.abs(x) >= row.scrollWidth / 2) x = 0;

      row.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  initRow(document.getElementById("rowRight"), "right");
  initRow(document.getElementById("rowLeft"), "left");

});


/* ===============================
   STATS SLIDER
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const track = document.getElementById("statsTrack");
  if (!track) return;

  const speed = 0.8;
  const items = [...track.children];
  items.forEach(item => track.appendChild(item.cloneNode(true)));

  let x = 0;

  function animate() {
    x -= speed;
    if (Math.abs(x) >= track.scrollWidth / 2) x = 0;
    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});


/* ===============================
   FAQ ACCORDION
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });

});


/* ===============================
   BACK TO TOP BUTTON
================================ */

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (!backToTopBtn) return;

  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition > pageHeight - 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }

});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
