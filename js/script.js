var sliderBtnPrev = document.querySelector('.offers__sliders-btn--prev');
var sliderBtnNext = document.querySelector('.offers__sliders-btn--next');
var sliders = document.querySelectorAll('.offers__slider');
var offersItem = document.querySelector('.offers__item--catalog');
var sliderInputPrev = document.querySelector('.offers__catalog-input--prev');
var sliderInputNext = document.querySelector('.offers__catalog-input--next');

var prev = function() {
  sliders[0].classList.remove('offers__slider--shown');
  sliders[1].classList.add('offers__slider--shown');
  if (offersItem.classList.contains('offers__item--catalog-first') || sliders[0].classList.contains('offers__slider--shown')) {
    offersItem.classList.remove('offers__item--catalog-first');
    offersItem.classList.add('offers__item--catalog-second');
    sliders[0].classList.remove('offers__slider--shown');
    sliders[1].classList.add('offers__slider--shown');
  } else {
    offersItem.classList.remove('offers__item--catalog-second');
    offersItem.classList.add('offers__item--catalog-first');
    sliders[1].classList.remove('offers__slider--shown');
    sliders[0].classList.add('offers__slider--shown');
  }
};

var next = function() {
  if (offersItem.classList.contains('offers__item--catalog-first') || sliders[0].classList.contains('offers__slider--shown')) {
    offersItem.classList.remove('offers__item--catalog-first');
    offersItem.classList.add('offers__item--catalog-second');
    sliders[0].classList.remove('offers__slider--shown');
    sliders[1].classList.add('offers__slider--shown');
  } else {
    offersItem.classList.remove('offers__item--catalog-second');
    offersItem.classList.add('offers__item--catalog-first');
    sliders[1].classList.remove('offers__slider--shown');
    sliders[0].classList.add('offers__slider--shown');
  }
};


sliderBtnPrev.addEventListener('click', function() {
  prev();
});

sliderBtnNext.addEventListener('click', function() {
  next();
})

sliderInputPrev.addEventListener('click', function() {
  prev();
});

sliderInputNext.addEventListener('click', function() {
  next();
})



