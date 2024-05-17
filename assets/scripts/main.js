document.addEventListener('DOMContentLoaded', function() {

    const slider = document.querySelector('.analytics__bottom-slider');
    if(slider) {
        let swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 30,
            navigation: {
                nextEl: ".slider-nav.--next",
                prevEl: ".slider-nav.--prev",
            },
        });
    }

});