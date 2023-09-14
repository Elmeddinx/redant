
var eventList = ["resize", "DOMContentLoaded"];
eventList.forEach(e => {
    window.addEventListener(e, () => {
        var genislik = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (genislik <= 1200) {
            var lineAttr = document.querySelectorAll(".swiperLine");
            lineAttr.forEach(e => {
                e.querySelector("line").setAttribute("x2", "30");
            });
            var circleAttr = document.querySelectorAll(".swiperLine");
            circleAttr.forEach(e => {
                e.querySelector("circle").setAttribute("cx", "40");
            });
        } else if (genislik >= 1200) {
            var lineAttr = document.querySelectorAll(".swiperLine");
            lineAttr.forEach(e => {
                e.querySelector("line").setAttribute("x2", "108");
            });
            var circleAttr = document.querySelectorAll(".swiperLine");
            circleAttr.forEach(e => {
                e.querySelector("circle").setAttribute("cx", "122");
            });
        }
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: false,
    // spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1.4,
        },
        375: {
            slidesPerView: 1.65,
        },
        450: {
            slidesPerView: 2,
        },
        525: {
            slidesPerView: 2.3,
        },
        625: {
            slidesPerView: 2.8,
        },
        725: {
            slidesPerView: 3.25,
        },
        825: {
            slidesPerView: 3.75,
        },
        900: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 6,
        },
    },
});
