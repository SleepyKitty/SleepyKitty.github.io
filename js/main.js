'use strict';

let burger = document.querySelector('.menu__burger');
let menuList = document.querySelector('.menu__list');
let header = document.querySelector('.header');
let search = document.querySelector('.search__icon');
let input = document.querySelector('.search__input');
let anchor = document.querySelectorAll('a[href^="#"]');

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