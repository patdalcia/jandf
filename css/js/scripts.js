//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {

    loop: "true",
    speed: 600,
    slidesPerView: 'auto',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: "5000",
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: "true",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

let swiper2 = new Swiper(".mySwiper2", {
    loop: "true",
    speed: 600,
    slidesPerView: '1',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 30,
    initialSlide: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: "15000",
        disableOnInteraction: false,
        reverseDirection: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: "true",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});
