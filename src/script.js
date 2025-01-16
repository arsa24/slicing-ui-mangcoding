import Lenis from "lenis";
import Swiper from "swiper";
import "swiper/css";
import { Mousewheel } from "swiper/modules";

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
  autoplay: {
    delay: 300,
  },
  mousewheel: true,
  modules: [Mousewheel],
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

// pricing
const cards = document.querySelectorAll(".card-price");
const month = document.querySelector("#monthly");
const year = document.querySelector("#yearly");
const timeSubs = document.querySelectorAll(".time");
const dataPlan = document.querySelectorAll(".plan-card");
const price = document.querySelectorAll(".price");
const discInfo = document.querySelectorAll(".disc-info");
const dsc = document.querySelectorAll(".discount");
const pricBeforeDisc = document.querySelectorAll(".pric-before-disc");

function updatePricing(plan) {
  cards.forEach((e, i) => {
    const p = dataPlan[i].getAttribute("data-year");
    const x = dataPlan[i].getAttribute("data-month");
    const discount = 35;
    const calcDisc = p - (discount * p) / 100;
    dsc[i].innerHTML = `${discount}% Discount`;

    if (plan == "Month") {
      discInfo[i].classList.remove("disc-info-active");
      discInfo[i].classList.add("hidden");
      timeSubs[i].innerHTML = "Month";
      price[i].innerHTML = `$${x}/`;
    } else {
      discInfo[i].classList.add("disc-info-active");
      discInfo[i].classList.remove("hidden");
      price[i].innerHTML = `$${
        calcDisc % 1 !== 0 ? calcDisc.toFixed(2) : calcDisc
      }/`;
      timeSubs[i].innerHTML = "Year";
      pricBeforeDisc[i].innerHTML = `$${p}`;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector("#togglePrice");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked == true) {
      console.log(true);
      year.classList.add("pricing-active");
      month.classList.remove("pricing-active");
      updatePricing("Year");
    } else {
      console.log(false);
      updatePricing("Month");
      month.classList.add("pricing-active");
      year.classList.remove("pricing-active");
    }
  });
});

// navbar
const nvbar = document.querySelector(".navbar-mobile");
const nvbtn = document.querySelector("#nvbtn");
const closeBtn = document.querySelector(".close-btn")

nvbtn.addEventListener("click", () => {
  nvbar.classList.add("navbar-active");
});

closeBtn.addEventListener("click", () => {
  nvbar.classList.remove("navbar-active");
})
