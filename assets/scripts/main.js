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

    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }

    const burger = document.querySelector('.header__burger');
    if(burger) {
        burger.addEventListener('click', function(e) {
            let $this = e.target,
                $menu = document.querySelector('.header__nav-wrapper'),
                $html = document.querySelector('html');
            
            $this.classList.toggle('is-active');
            $menu.classList.toggle('is-active');
            $html.classList.toggle('of-hidden');
        });
    }
    if(window.innerWidth < 768) {
        const menuItems = document.querySelectorAll('.header__nav-item');
        if(menuItems) {
            menuItems.forEach(function(item) {
                item.addEventListener('click', function() {
                    let $burger = document.querySelector('.header__burger'),
                        $menu = document.querySelector('.header__nav-wrapper'),
                        $html = document.querySelector('html');

                    if($burger.classList.contains('is-active')) {
                        $burger.classList.remove('is-active');
                        $menu.classList.remove('is-active');
                        $html.classList.remove('of-hidden');
                    }
                });
            });
        }
    }
});