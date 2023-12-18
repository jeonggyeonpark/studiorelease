const images = [
  "../assets/img/FRITZHANSENXCOLD/MAIN%20IMAGE.jpg",
  "../assets/img/RHOMBUSLABXOYUWOO/MAIN%20IMAGE.jpg",
  "../assets/img/SKAGERAKXMOMOSCOFFEE/MAIN%20IMAGE.jpg",
  "../assets/img/LCDC/MAIN%20IMAGE_1.jpg",
  "../assets/img/NONTTON/MAIN%20IMAGE.jpg",
  "../assets/img/ORR/MAIN%20IMAGE.jpg",
  "../assets/img/PLATFORMPLACE/MAIN%20IMAGE.jpg",
  "../assets/img/PRINTBAKERY/MAIN%20IMAGE.jpg"
];

const preload = (images) => () => {
  images.forEach((image) => {
      const img = new Image();
      img.src = image;
  });
};

const addLoadEvent = (func) => {
  const onloadEvent = window.onload;
  if (typeof window.onload != 'function') {
      window.onload = func;
  } else {
      window.onload = function() {
          if (onloadEvent) {
              onloadEvent();
          }
          func();
      }
  }
}

addLoadEvent(preload(images));