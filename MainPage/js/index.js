// Select slides and controls
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

// Show slide by index
function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

// Next / Prev functions
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// Event listeners
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Auto-slide every 6 seconds
setInterval(nextSlide, 6000);
