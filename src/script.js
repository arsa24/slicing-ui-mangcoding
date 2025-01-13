import Lenis from "lenis";
import Swiper from "swiper";
import "swiper/css";

// lenis
const lenis = new Lenis({
  smoothWheel: true,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// swiper
const w = window.innerWidth;
const swiper = new Swiper(".swiper", {
  slidesPerView: w >= 768 ? 3 : 1,
  centeredSlides: true,
  loop: true,
  slideActiveClass: "active-slide",
  centeredSlidesBounds: true,
});

// acordion
let acordions = document.querySelectorAll(".acordion");
let acordionItem = document.querySelectorAll(".acordion-item");
let dropIcons = document.querySelectorAll(".acordion button svg");
acordions.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active-acordion");
    dropIcons[i];
  });
});

// plan

const month = document.querySelector("#monthly");
const year = document.querySelector("#yearly");

function updatePricing(plan) {
  const discount = 15;

  const planCards = document.querySelectorAll(".plan-card");

  planCards.forEach((card) => {
    const dataMonth = parseFloat(card.getAttribute("data-month"));
    const dataYear = parseFloat(card.getAttribute("data-year"));
    const priceElement = card.querySelector(".price");
    const timeElement = card.querySelector(".time");

    if (plan === "Month") {
    } else if (plan === "Year") {
    }
  });
}

month.addEventListener("click", () => {
  updatePricing("Month");
  month.classList.add("pricing-active");
  year.classList.remove("pricing-active");
});

year.addEventListener("click", () => {
  updatePricing("Year");
  year.classList.add("pricing-active");
  month.classList.remove("pricing-active");
});
