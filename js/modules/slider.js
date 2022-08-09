// const Splide = require('@splidejs/splide').default;
import Splide from '@splidejs/splide'

export function slider() {
    // Slider 

    // const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    // const slidesField = document.querySelector('.offer_slider-inner');
    // const total = document.querySelector('#total');
    // const current = document.querySelector('.offer__slider-counter span#current');
    // const slides = document.querySelectorAll('.offer__slide');
    // const prevBtn = document.querySelector('.offer__slider-prev');
    // const nextBtn = document.querySelector('.offer__slider-next');
    // const width = window.getComputedStyle(slidesWrapper).width;

    // let slideIndex = 1;
    // let offset = 0;

    // SLIEDER LIBRARY VARIANT

    // var splide = new Splide('.splide', {
    //     type: 'loop',
    //     perPage: 1,

    // });
    // splide.mount();

    new Splide('.splide', {
        type: 'loop',
        perPage: 1,

    }).mount();

    // VARIANT #1

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function slideShow(n = slideIndex) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }
    // slideShow();


    // function plusSlide(n) {
    //     slideShow(slideIndex += n)
    // }

    // prevBtn.addEventListener('click', e => plusSlide(-1));
    // nextBtn.addEventListener('click', e => plusSlide(1));



    // VARIANT #2

    // slidesField.style.cssText = `width: ${100 * slides.length + '%'}; display: flex; transition: all ease-in-out .4s`;
    // slidesWrapper.style.overflow = 'hidden';

    // slides.forEach(slide => slide.style.width = width);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    //     current.textContent = `0${slideIndex}`;
    // } else {
    //     total.textContent = slides.length;
    //     current.textContent = slideIndex;
    // }

    // nextBtn.addEventListener('click', e => {
    //     if (offset === parseInt(width) * (slides.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += parseInt(width);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slideIndex == slides.length) slideIndex = 1
    //     else slideIndex++

    //     if (slides.length < 10) current.textContent = `0${slideIndex}`
    //     else slideIndex
    // })

    // prevBtn.addEventListener('click', (e,) => {
    //     if (offset === 0) {
    //         offset = parseInt(width) * (slides.length - 1)
    //     } else {
    //         offset -= parseInt(width);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slideIndex == 1) slideIndex = slides.length;
    //     else slideIndex--;

    //     if (slides.length < 10) current.textContent = `0${slideIndex}`;
    //     else current.textContent =  slideIndex;
    // })
}