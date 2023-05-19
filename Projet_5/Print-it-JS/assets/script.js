const slides = [
	{
	  "image":"./assets/images/slideshow/slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image":"./assets/images/slideshow/slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image":"./assets/images/slideshow/slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image":"./assets/images/slideshow/slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const imageContainer = document.querySelector(".banner-img");



let currentSlideIndex = 0;

function createDotPoint(slide, index) {
  const newDot = document.createElement('li');
  newDot.classList.add("dot");
  dotsContainer.appendChild(newDot);

  newDot.addEventListener('click', () => {
    goToSlide(index);
  });
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }

  currentSlideIndex = index;

  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    if (i === currentSlideIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });

  const slideToShow = slides[currentSlideIndex];

  // Afficher l'image associée dans le conteneur
  imageContainer.style.backgroundImage = `url('${slideToShow.image}')`;
  imageContainer.innerHTML = slideToShow.tagLine;
}

arrowLeft.addEventListener('click', () => {
  const prevSlideIndex = currentSlideIndex - 1;
  goToSlide(prevSlideIndex);
});

arrowRight.addEventListener('click', () => {
  const nextSlideIndex = currentSlideIndex + 1;
  goToSlide(nextSlideIndex);
});

slides.forEach((slide, index) => {
  createDotPoint(slide, index);
});

// Afficher la première diapositive au chargement de la page
goToSlide(currentSlideIndex);