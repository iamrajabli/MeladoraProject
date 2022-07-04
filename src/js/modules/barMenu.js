const barMenu = (navbarIconSelector, navbarMenuSelector, productsIconSelector, menuProductsSelector, productsContentSelector) => {
    const burgerNavbar = document.querySelector(navbarIconSelector),
        menuNavbar = document.querySelector(navbarMenuSelector),
        burgerProducts = document.querySelector(productsIconSelector),
        menuProducts = document.querySelector(menuProductsSelector),
        productsContent = document.querySelectorAll(productsContentSelector);


    const burger = (selector, menu) => {
        selector.addEventListener('click', () => {
            menu.classList.toggle('d-flex');
            selector.style.transition = 'all 200ms linear';
            selector.classList.toggle('rotate-180');
        });
    }

    const marginTop = (selector, menu) => {
        selector.addEventListener('click', () => {

            menu.forEach(item => {
                item.classList.toggle('mt-10');
            })
        });
    }

    burger(burgerNavbar, menuNavbar)
    burger(burgerProducts, menuProducts)
    marginTop(burgerProducts, productsContent)

}

export default barMenu;