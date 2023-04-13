const carousel = document.querySelector('.carousel');
const carouselImage = carousel.querySelector('.carousel-image');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');
const thumbnailsContainer = carousel.querySelector('.thumbnails');
let title = carousel.querySelector('.carousel-title');
let text = carousel.querySelector('.carousel-text');
console.log(title)
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let index = 0;

function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    updateCarousel();
}

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    carouselImage.src = images[index].image;
    console.log(carouselImage)
    title.textContent = images[index].title;
    console.log(title)
    text.textContent = images[index].text;
    console.log(text)
    const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

for (let i = 0; i < images.length; i++) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.style.backgroundImage = `url(${images[i].image})`;
    thumbnail.addEventListener('click', () => {
        index = i;
        updateCarousel();
    });
    thumbnailsContainer.appendChild(thumbnail);
}

updateCarousel();

// Aggiungiamo l'autoplay
let autoplayInterval = setInterval(() => {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    updateCarousel();
  }, 3000);
  
  // Pausa l'autoplay quando il mouse entra nel carousel
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  // Riavvia l'autoplay quando il mouse esce dal carousel
  carousel.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => {
      index++;
      if (index >= images.length) {
        index = 0;
      }
      updateCarousel();
    }, 3000);
  });
