document.addEventListener("click", (e) => {
  let arrow;
  if (e.target.matches(".arrow")) {
    arrow = e.target;
  } else {
    arrow = e.target.closest(".arrow");
  }
});

function onArrowClick(arrow) {
  const slider = arrow.closest(".container").querySelector(".slider");
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  if (arrow.classList.contains("left-arrow")) {
    slider.style.setProperty("--slider-index", sliderIndex - 1);
  }
  if (arrow.classList.contains("right-arrow")) {
    slider.style.setProperty("--slider-index", sliderIndex + 1);
  }
}
