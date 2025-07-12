const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slide.length - 1;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentIndex = currentIndex < slide.length - 1 ? currentIndex + 1 : 0;
  updateSlider();
});

