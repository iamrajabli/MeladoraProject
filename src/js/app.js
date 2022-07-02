const burger = document.querySelector('.burger__menu .fa-bars'),
    menu = document.querySelector('#navbar ul');

burger.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
})