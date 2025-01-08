// accordion
function toggleAccordion(i) {
  const accordion = [1, 2, 3, 4, 5];
  accordion.map((a) => {
    const icon = document.querySelector(`#accordion-${a} button svg`);
    const content = document.querySelector(`.accordion-content-${a}`);
    if (a == i) {
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.classList.add("rotate-180");
        icon.classList.remove("rotate-0");
        console.log(true);
      } else {
        console.log(false);
        icon.classList.remove("rotate-180");
        content.classList.add("hidden");
        icon.classList.add("rotate-0");
      }
    } else {
      icon.classList.remove("rotate-180");
      content.classList.add("hidden");
      icon.classList.add("rotate-0");
    }
  });
}
