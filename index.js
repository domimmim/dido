function clickme() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

document.querySelector(".right-arrow").onclick = function () {
  var currentSlide = document.querySelector("#like .slide.active");

  var nextSlide = currentSlide.nextElementSibling;

  if (nextSlide === null) {
    nextSlide = currentSlide.parentElement.firstElementChild;
  }

  currentSlide.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,

      fill: "both",
    }
  );
  currentSlide.classList.remove("active");
  nextSlide.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  nextSlide.classList.add("active");
};

document.querySelector(".left-arrow").onclick = function () {
  var currentSlide = document.querySelector("#like .slide.active");

  var previousSlide = currentSlide.previousElementSibling;

  if (previousSlide === null) {
    previousSlide = currentSlide.parentElement.lastElementChild;
  }

  currentSlide.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  currentSlide.classList.remove("active");

  previousSlide.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );

  previousSlide.classList.add("active");
};
