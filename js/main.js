var burger = document.querySelector('.menu__burger');
var menuList = document.querySelector('.menu__list');
var header = document.querySelector('.header');
var search = document.querySelector('.search__icon');
var input = document.querySelector('.search__input');
var anchor = document.querySelectorAll('a[href^="#"]');

burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  burger.classList.toggle('menu__burger--clicked');
  header.classList.toggle('header--open-menu');
  menuList.classList.toggle('menu__open');
});

search.addEventListener('click', function (evt) {
  evt.preventDefault();
  input.classList.toggle('search__input-show');
});

anchor.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});