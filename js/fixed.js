'use strict'
const header = document.querySelector('.header');
const firstBlock = document.querySelector('.section-1');
const firstBlockHeight = firstBlock.scrollHeight;
const arr = document.querySelector('.arr');
let scrollStarted = 0;

window.addEventListener('scroll', headerScrollHandler);

function headerScrollHandler () {
    const scrollTop = window.scrollY;

    if (scrollTop >= firstBlockHeight) {
        arr.classList.add('arr-visiable')
        header.classList.add('header-fixed')
    } else {
        arr.classList.remove('arr-visiable')
        header.classList.remove('header-fixed')
    }
    scrollStarted = scrollTop;
}