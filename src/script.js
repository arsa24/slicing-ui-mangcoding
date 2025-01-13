import Swiper from "swiper";
import "swiper/css";

const w = window.innerWidth;

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: w >= 768 ? 3 : 1,
  centeredSlides: true,
  loop: true,
  slideActiveClass: "active-slide",
  centeredSlidesBounds: true
});

// acordion
let acordions = document.querySelectorAll(".acordion");
acordions.forEach((item) => {
  item.addEventListener("click", () => {
    acordions.forEach((element) => {
      element.addEventListener("click", () => {
        element.classList.remove("active-acordion");
        console.log("click");
      });
    });
    item.classList.add("active-acordion");
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
