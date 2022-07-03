const burger = document.querySelector('.burger__menu .fa-bars'),
    menu = document.querySelector('#navbar ul');

burger.addEventListener('click', () => {
   menu.classList.toggle('d-flex')
})