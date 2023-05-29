// Définition des slides avec les images et les lignes de tag
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  }
];

// Sélection des éléments du DOM
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const imageContainer = document.querySelector(".banner-img");

// Index du slide actuel
let currentSlideIndex = 0;

// Fonction pour créer un point de repère (dot) pour chaque slide
function createDotPoint(index) {
  const newDot = document.createElement("li");
  newDot.classList.add("dot");
  dotsContainer.appendChild(newDot);

  newDot.addEventListener("click", () => {
    goToSlide(index);
  });
}

// Fonction pour afficher le slide correspondant à l'index donné
function goToSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }

  currentSlideIndex = index;

  // Met à jour la classe CSS des dots pour indiquer le slide actuel
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });

  // Récupère le slide à afficher
  const slideToShow = slides[currentSlideIndex];

  // Met à jour l'image et la ligne de tag dans le DOM
  imageContainer.src = `./assets/images/slideshow/${slideToShow.image}`;
  const tagLineContainer = document.querySelector("#banner p");
  tagLineContainer.innerHTML = slideToShow.tagLine;
}

// Gestionnaire d'événement pour le bouton de la flèche gauche
arrowLeft.addEventListener("click", () => {
  const prevSlideIndex = currentSlideIndex - 1;
  if (prevSlideIndex < 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(prevSlideIndex);
  }
});

// Gestionnaire d'événement pour le bouton de la flèche droite
arrowRight.addEventListener("click", () => {
  const nextSlideIndex = currentSlideIndex + 1;
  if (nextSlideIndex >= slides.length) {
    goToSlide(0);
  } else {
    goToSlide(nextSlideIndex);
  }
});

// Crée un point de repère (dot) pour chaque slide
slides.forEach((index) => {
  createDotPoint(index);
});

// Affiche le premier slide au chargement de la page
goToSlide(currentSlideIndex);
