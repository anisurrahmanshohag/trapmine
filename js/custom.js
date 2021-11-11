$(function() {
    'use strict';

    // =================Menu fix Start==================
    const header = document.querySelector(".main_menu");
    const sectionOne = document.querySelector(".home_intro");

    const sectionOneOptions = {
        rootMargin: "-200px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver(function(
            entries,
            sectionOneObserver
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add("nav_scrolled");
                } else {
                    header.classList.remove("nav_scrolled");
                }
            });
        },
        sectionOneOptions);

    sectionOneObserver.observe(sectionOne);
    // =================Menu fix End==================



    // =================scroll slider start================
    const faders = document.querySelectorAll(".fade_in");
    const sliders = document.querySelectorAll(".slide_in");

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px"
    };



    const appearOnScroll = new IntersectionObserver(function(
            entries,
            appearOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("appear");
                    appearOnScroll.unobserve(entry.target);
                }
            });
        },
        appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
    // =================scroll slider End==================
    // Client slider

    $('.client_slider').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // Client slider
})