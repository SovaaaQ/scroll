const screenHeight = document.documentElement.clientHeight;
const listItems = document.querySelectorAll('.list-item');
const firstBox = document.querySelector('.box-1');
const secondBox = document.querySelector('.box-2');
const thirdBox = document.querySelector('.box-3');

function scrolling() {
    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add('list-item--active');
        } else {
            listItem.classList.remove('list-item--active');
        }
    }

    if (isPartiallyVisible(firstBox)) {
        firstBox.classList.add('box-1--active');
    } else {
        firstBox.classList.remove('box-1--active');
    }

    if (isPartiallyVisible(secondBox)) {
        secondBox.classList.add('box-2--active');
    } else {
        secondBox.classList.remove('box-2--active');
    }

    if (isPartiallyVisible(thirdBox)) {
        thirdBox.classList.add('box-3--active');
    } else {
        thirdBox.classList.remove('box-3--active');
    }

    function isPartiallyVisible(element) {
        const elementBoundary = element.getBoundingClientRect();
        const top = elementBoundary.top;
        const bottom = elementBoundary.bottom;
        const height = elementBoundary.height;

        return (top + height >= 0) && (height + document.documentElement.clientHeight > bottom);
    }

    function isFullyVisible(element) {
        const elementBoundary = element.getBoundingClientRect();
        const top = elementBoundary.top;
        const bottom = elementBoundary.bottom;

        return (top >= 0) && (bottom <= screenHeight);
    }
}

window.addEventListener("scroll", scrolling)