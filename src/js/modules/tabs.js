const tabs = (menuItemSelector, productsContentSelector) => {
    const menuItem = document.querySelectorAll(menuItemSelector),
        productsContent = document.querySelectorAll(productsContentSelector);

    hideTabs();
    showTab();

    menuItem.forEach((item, i) => {
        item.addEventListener('click', e => {
            e.preventDefault();

            hideTabs();
            showTab(i);

            removeActive();
            item.classList.add('text-green')
        })
    });

    function removeActive() {
        menuItem.forEach(item => {
            item.classList.remove('text-green');
        })

    }
    function hideTabs() {
        productsContent.forEach(item => item.style.display = 'none');
    }

    function showTab(id = 0) {
        productsContent[id].style.display = 'flex';
    }

}

export default tabs;