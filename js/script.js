var sliderBtnPrev = document.querySelector('.offers__sliders-btn--prev');
var sliderBtnNext = document.querySelector('.offers__sliders-btn--next');
var sliders = document.querySelectorAll('.offers__slider');
var offersItem = document.querySelector('.offers__item--catalog');
var sliderInputPrev = document.querySelector('.offers__catalog-input--prev');
var sliderInputNext = document.querySelector('.offers__catalog-input--next');
var i;

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

var servInputs = document.querySelectorAll('.services__input');
var servSlideFirst = document.querySelector('.services__slide--first');
var servSlideSecond = document.querySelector('.services__slide--second');
var servSlideThird = document.querySelector('.services__slide--third');

servInputs[0].addEventListener('click', function() {
  slider(servSlideFirst, servSlideSecond, servSlideThird);
});

servInputs[1].addEventListener('click', function() {
  slider(servSlideSecond, servSlideFirst, servSlideThird);
});

servInputs[2].addEventListener('click', function() {
  slider(servSlideThird, servSlideFirst, servSlideSecond);
});

function slider(sliderShown, sliderRemoved1, sliderRemoved2) {
  sliderRemoved1.classList.remove('services__slide--shown');
  sliderRemoved2.classList.remove('services__slide--shown');
  sliderShown.classList.add('services__slide--shown');
};


var mapImg = document.querySelector('.about-us__map-img');
var mapIframe = document.querySelector('.about-us__contacts-popup');
var mapClose = document.querySelector('.about-us__popup-close');

mapIframe.classList.remove('about-us__contacts-popup--no-js');

mapImg.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapIframe.style.display = 'block';
});

mapClose.addEventListener('click', function() {
  mapIframe.style.display = 'none';
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    mapIframe.style.display = 'none';
    overlay.style.display = 'none';
    feedback.classList.remove('feedback--showed');
  }
});


var contactsBtn = document.querySelector('.about-us__button--contacts');
var feedback = document.querySelector('.feedback');
var contactsClose = document.querySelector('.feedback__modal-close');
var overlay = document.querySelector('.overlay');
var inputsFeedback = document.querySelectorAll('.feedback__input');
var textFeedback = document.querySelector('.feedback__textarea');
var feedbackSubmit = document.querySelector('.feedback__button');

contactsBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.style.display = 'block';
  feedback.classList.add('feedback--showed');
});

overlay.addEventListener('click', function() {
  this.style.display = 'none';
  feedback.classList.remove('feedback--showed');
});

contactsClose.addEventListener('click', function() {
  overlay.style.display = 'none';
  feedback.classList.remove('feedback--showed');
});

feedbackSubmit.addEventListener('click', function(evt) {
  for (i = 0; i < inputsFeedback.length; i++) {
    if (!inputsFeedback[i].value || !textFeedback.value) {
      evt.preventDefault();
      feedback.classList.remove('feedback--shake');
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add('feedback--shake');
    }
  }
})
