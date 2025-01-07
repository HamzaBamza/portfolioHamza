const navButtons = document.querySelectorAll("[data-slider-button]");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.sliderButton === "next" ? 1 : -1;
    const slides = button.closest("[data-slider]").querySelector("[data-slides]");
    const currentSlide = slides.querySelector("[data-active]");

    let newIndex = [...slides.children].indexOf(currentSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete currentSlide.dataset.active;
  });
});
// fik lidt hjælp af chat
