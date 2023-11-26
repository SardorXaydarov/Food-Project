var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".slide-pagination",
        type: "fraction",
    },
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        320:{
            slidesPerView:1,
        },
        480:{
            slidesPerView:1.5,
        },
        630:{
            slidesPerView:2,
        },
        760: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1170:{
            slidesPerView:3,
            spaceBetween:30,
        }   
    }
});


