var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerView: "auto",
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});


window.addEventListener("resize", () => {
    var genislik = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (genislik <= 768) {
        var lineAttr = document.querySelectorAll(".swiperLine");
        lineAttr.forEach(e => {
            e.querySelector("line").setAttribute("x2", "35");
        });
        var circleAttr = document.querySelectorAll(".swiperLine");
        circleAttr.forEach(e => {
            e.querySelector("circle").setAttribute("cx", "45");
        });
    } else if (genislik >= 768) {
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