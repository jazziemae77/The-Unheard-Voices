var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  var bodyElement = document.querySelector("body");
  
  // Toggle the 'active' class on the body element
  bodyElement.classList.toggle("active");

  // Add or remove the 'inactive' class based on the active state
  if (bodyElement.classList.contains("active")) {
    bodyElement.classList.remove("inactive");
  } else {
    bodyElement.classList.add("inactive");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove("active-slide");
    slides[index].classList.add("active-slide");
    currentSlide = index;
  }

const prevButton = document.createElement("button");
prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
prevButton.classList.add("nav-button", "prev-button");
prevButton.addEventListener("click", () => {
  const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prevSlide);
});

const nextButton = document.createElement("button");
nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
nextButton.classList.add("nav-button", "next-button");
nextButton.addEventListener("click", () => {
  const nextSlide = (currentSlide + 1) % slides.length;
  showSlide(nextSlide);
});

const carousel = document.querySelector(".slideshow");
carousel.appendChild(prevButton);
carousel.appendChild(nextButton);

showSlide(currentSlide);
});

