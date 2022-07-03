const burgerNavbar = document.querySelector('#navbar .burger__menu .fa-bars'),
    menuNavbar = document.querySelector('#navbar ul'),
    burgerProducts = document.querySelector('#products .burger__menu .fa-bars'),
    menuProducts = document.querySelector('#products ul'),
    productsContent = document.querySelector('#products .products__content');


function burger(selector, menu) {
    selector.addEventListener('click', () => {
        menu.classList.toggle('d-flex');
        selector.style.transition = 'all 200ms linear';
        selector.classList.toggle('rotate-180');
    });
}

function marginTop(selector, menu) {
    selector.addEventListener('click', () => {
        menu.classList.toggle('mt-10');
    });
}

burger(burgerNavbar, menuNavbar)
burger(burgerProducts, menuProducts)
marginTop(burgerProducts, productsContent)