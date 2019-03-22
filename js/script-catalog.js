var toBuyBurttons = document.querySelectorAll('.product__button-buy');
var cartModal = document.querySelector('.cart-modal');
var cartGoods = document.querySelector('.user-nav__cart-number');
var cart = document.querySelector('.user-nav__cart');
var closeModal = document.querySelector('.cart-modal__close');
var returnBtn = document.querySelector('.cart-modal__return');
var k = 0;

for (var i = 0; i < toBuyBurttons.length; i++) {
  toBuyBurttons[i].onclick = function() {
    cartModal.classList.add('cart-modal--showed');
    cart.classList.add('user-nav__cart--added');
    k++;
    cartGoods.innerHTML =+ k;
  }
};

closeModal.addEventListener('click', function() {
  close();
});

returnBtn.addEventListener('click', function() {
  close();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    close();
  }
});

function close() {
  cartModal.classList.remove('cart-modal--showed');
}
