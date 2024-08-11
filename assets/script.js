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
  },
];

let currentSlide = 0;

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

function createDots() {
  const dotsContainer = document.querySelector(".dots");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
  }
}

function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

function updateSlide(direction) {
  if (direction === "right") {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0; // Retour à la première image
    } else {
      currentSlide++;
    }
  } else if (direction === "left") {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1; // Aller à la dernière image
    } else {
      currentSlide--;
    }
  }

  // Mise à jour de l'image et du texte
  const bannerImg = document.querySelector(".banner-img");
  const tagLine = document.querySelector("#banner p");
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  // Mise à jour des points
  updateDots(currentSlide);
}

function arrowright() {
  updateSlide("right");
}

function arrowleft() {
  updateSlide("left");
}

rightArrow.addEventListener("click", arrowright);
leftArrow.addEventListener("click", arrowleft);

document.addEventListener("DOMContentLoaded", function () {
  createDots();
});
