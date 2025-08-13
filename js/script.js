/*------------------------------
Preloader
-------------------------------*/

$(document).ready(function () {
    /* ---------------------------- Preloader ---------------------------- */
    $(window).on("load", function () {
        $('.preloader').fadeOut("slow");
    });


/*------------------------------
Slider Area Section Swiper Slider
-------------------------------*/
var swiper = new Swiper('#slider-area .swiper-container', {
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});


/*------------------------------
Team Section Swiper Slider
-------------------------------*/
var swiper = new Swiper('#team .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 290px
        290: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 991px
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5,
            spaceBetween: 30
        },
    }
});


/*------------------------------
Sponsor Section Swiper Slider
-------------------------------*/
var swiper = new Swiper('#sponsors .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 290px
        290: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 991px
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    },
});


/*-------------------------------------
Our Testimonial Section Swiper Slider
-------------------------------------*/
var swiper = new Swiper('#our-testimonial .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 8000,
    },
});

var swiper = new Swiper('#our-testimonial .about-monial-2 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 8000,
    },
});


/*------------------------------
Popup Navigation Bar Section
-----------------------------*/
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.ham');
let upperNav = document.querySelector('.links');
let hederArea = document.getElementById('header-area');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
    if (header.classList.contains('menu-open')) {
        upperNav.style.display = "none";
        hamburgerMenu.classList.remove("fa-bars");
        hamburgerMenu.classList.add("fa-times");
        document.querySelector(".search").classList.remove("fa-search");
    } else {
        upperNav.style.display = "block";
        hamburgerMenu.classList.add("fa-bars");
        hamburgerMenu.classList.remove("fa-times");
        document.querySelector(".search").classList.add("fa-search");
    }

});


/*---------------------
Scroll Active Header
---------------------*/
window.addEventListener("scroll", function () {
    let headerBg = document.getElementById('header-area');
    let scrollsize = window.scrollY > 150;
    headerBg.classList.toggle('scrolling-active', scrollsize);

});


/*----------------------
Wow JS Initializaton
----------------------*/
new WOW().init();

/*---------------------
counterUp jQuery Plugin
----------------------*/
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});


/*---------------------
Scroll to Top Button
--------------------*/
const topBtn = document.querySelector('.topBtn');
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {
        topBtn.classList.add("active");
    } else {
        topBtn.classList.remove("active");
    }
});

topBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

});