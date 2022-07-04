const slider = () => {

    const sliderContainer = document.querySelector('#slider .slider__container'),
        sliderArea = document.querySelector('#slider .slider__area'),
        prev = document.querySelector('#slider .slider__control .fa-chevron-left'),
        next = document.querySelector('#slider .slider__control .fa-chevron-right'),
        sliderItem = document.querySelectorAll('#slider .slider__item'),
        widthContainer = window.getComputedStyle(sliderContainer).width,
        heightContainer = window.getComputedStyle(sliderItem[0]).height,
        width = +widthContainer.slice(0, widthContainer.length - 2),
        height = +heightContainer.slice(0, heightContainer.length - 2) * 3;

    let position = null;
    let offset = 0;
    let totalWidth = width * (sliderItem.length / 3);
    let totalHeight = height * (sliderItem.length / 3);

    if (window.innerWidth > 1170) {
        sliderArea.style.width = totalWidth + 'px';
        sliderArea.style.height = heightContainer;
        position = true;
    }

    if (window.innerWidth < 1170) {
        sliderArea.style.width = widthContainer;
        sliderArea.style.height = totalHeight + 'px';
        position = false;
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1170) {
            sliderArea.style.width = totalWidth + 'px';
            sliderArea.style.height = heightContainer;
            position = true;
        }

        if (window.innerWidth < 1170) {
            sliderArea.style.width = widthContainer;
            sliderArea.style.height = totalHeight + 'px';
            position = false;
        }
    });



    prev.addEventListener('click', () => {

        if (offset == 0) {
            if (position) {
                offset = totalWidth - width;
            } else {
                offset = totalHeight - height;
            }
        } else {
            if (position) {
                offset -= width;
            } else {
                offset -= height;
            }
        }

        if (position) {
            sliderArea.style.transform = `translateX(-${offset}px)`;
        } else {
            sliderArea.style.transform = `translateY(-${offset}px)`;
        }
    });

    next.addEventListener('click', () => {

        if (position) {
            if (offset == (totalWidth - width)) {
                offset = 0;
            } else {
                offset += width;
            }
        } else {
            if (offset == (totalHeight - height)) {
                offset = 0;
            } else {
                offset += height;
            }
        }

        if (position) {
            sliderArea.style.transform = `translateX(-${offset}px)`;
        } else {
            sliderArea.style.transform = `translateY(-${offset}px)`;
        }
    });


}

export default slider;
