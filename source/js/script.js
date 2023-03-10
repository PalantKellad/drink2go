/** Burger Menu */
const navMain = document.querySelector('.main-header__navigation');
const mainMenu = document.querySelector('.main-menu');
const navToggle = document.querySelector('.toggle');
const navToggleButton = document.querySelector('.toggle__button');

mainMenu.classList.remove('main-menu--no-js');
navToggle.classList.remove('toggle--no-js');

const onMenuButtonClick = () => {
  navMain.classList.toggle('main-header__navigation--open');
  mainMenu.classList.toggle('main-menu--open');
  navToggleButton.classList.toggle('toggle__button--open');
}

navToggle.addEventListener('click', onMenuButtonClick);

/** Slider */

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.main-hero__pagination',
    clickable: 'true',
    bulletActiveClass: 'slider-pagination__bullet--current',
    bulletClass: 'slider-pagination__bullet',
    horizontalClass: 'main-hero__pagination',
    clickableClass: 'main-hero__pagination',
  },

  navigation: {
    nextEl: '.main-hero__button--next',
    prevEl: '.main-hero__button--prev',
  },

  a11y: {
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  }
});

const parentElement = document.querySelector(".main-hero");

swiper.on('slideChangeTransitionEnd', function (evt) {
  if (this.realIndex == 0) {
    parentElement.style.setProperty('--background', 'var(--background-warm)');
  }
  if (this.realIndex == 1) {
    parentElement.style.setProperty('--background', 'var(--background-cold)');
  }
  if (this.realIndex == 2) {
    parentElement.style.setProperty('--background', 'var(--background-neutral)');
  }
});

/** Map */

const START_ZOOM = 18;

const StartCoordinate = {
  LAT: 59.968454,
  LNG: 30.317555
};

const map = L.map('map', { zoomControl : false}).setView([StartCoordinate.LAT, StartCoordinate.LNG], START_ZOOM);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: 'img/icons/stack.svg#map-ballon',
  iconSize: [38, 50],
  iconAnchor: [5, 25],
});

const mainPinMarker = L.marker([StartCoordinate.LAT, StartCoordinate.LNG], { icon: mainPinIcon }).addTo(map);
