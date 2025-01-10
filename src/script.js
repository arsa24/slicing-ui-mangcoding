import Swiper from "swiper";
import "swiper/css";

// navbar dropdown

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  slideActiveClass: "active-slide",
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
