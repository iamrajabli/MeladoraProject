import barMenu from './modules/barMenu.js';
import tabs from './modules/tabs.js';
import slider from './modules/slider.js';

window.addEventListener('DOMContentLoaded', () => {
    barMenu('#navbar .burger__menu .fa-bars', '#navbar ul', '#products .burger__menu .fa-bars', '#products ul', '#products .products__content');

    tabs('#products ul li a', '#products .products__content');
    slider('#slider .slider__container', '#slider .slider__area', '#slider .slider__control .fa-chevron-left', '#slider .slider__control .fa-chevron-right', '#slider .slider__item', '#slider .slider__wrapper');

});
