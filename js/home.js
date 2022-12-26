const slider = document.querySelector(".slide_show");
let isDown = false;
let startx;
let scrollToLeft;

slider.addEventListener("mousedown", function (e) {
  isDown = true;
  slider.classList.add("active");

  startx = e.pageX - slider.offsetLeft;

  scrollToLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", function () {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", function () {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", function (e) {
  if (!isDown) return;
  e.preventDefault();

  const distanceX = e.pageX - slider.offsetLeft;
  const walk = distanceX - startx;
  slider.scrollLeft = scrollToLeft - walk;
});


// review 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});