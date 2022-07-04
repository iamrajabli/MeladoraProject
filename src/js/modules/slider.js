const slider = (sliderContainerSelector, sliderAreaSelector, prevSelector, nextSelector, sliderItemSelector, sliderWrapperSelector) => {

    const sliderContainer = document.querySelector(sliderContainerSelector),
        sliderArea = document.querySelector(sliderAreaSelector),
        prev = document.querySelector(prevSelector),
        next = document.querySelector(nextSelector),
        sliderItem = document.querySelectorAll(sliderItemSelector),
        sliderWrapper = document.querySelectorAll(sliderWrapperSelector);


    let widthContainer = window.getComputedStyle(sliderContainer).width,
        heightContainer = window.getComputedStyle(sliderItem[0]).height,
        marginItem = window.getComputedStyle(sliderItem[0]).marginBottom,
        margin = +marginItem.slice(0, marginItem.length - 2),
        width = +widthContainer.slice(0, widthContainer.length - 2),
        height = (+heightContainer.slice(0, heightContainer.length - 2) + margin) * 3,
        position = null,
        offset = 0,
        totalWidth = width * (sliderWrapper.length),
        totalHeight = height * (sliderWrapper.length);


    if (window.innerWidth > 1170) {
        positionTrue();
    }

    if (window.innerWidth < 1170) {
        positionFalse();
    }

    function sizes() {
        widthContainer = window.getComputedStyle(sliderContainer).width;
        heightContainer = window.getComputedStyle(sliderItem[0]).height;
        marginItem = window.getComputedStyle(sliderItem[0]).marginBottom;
        margin = +marginItem.slice(0, marginItem.length - 2);
        width = +widthContainer.slice(0, widthContainer.length - 2);
        height = (+heightContainer.slice(0, heightContainer.length - 2) + margin) * 3;
        position = null;
        offset = 0;
        sliderArea.style.transform = `translate(${offset}px)`;
        totalWidth = width * (sliderWrapper.length);
        totalHeight = height * (sliderWrapper.length);

    }

    function positionTrue() {
        sizes()
        sliderArea.style.width = totalWidth + 'px';
        sliderArea.style.height = heightContainer;
        position = true;
    }

    function positionFalse() {
        sizes()
        sliderArea.style.width = widthContainer;
        sliderArea.style.height = totalHeight + 'px';
        position = false;
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1170) {
            positionTrue();
        }

        if (window.innerWidth < 1170) {
            positionFalse();
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
