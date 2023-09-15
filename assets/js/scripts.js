
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

let accordions = document.querySelectorAll(".accordion");

let accordionItems = [];
accordions.forEach((acitem, aindex) => {
    accordionItems.push(accordions[aindex].querySelectorAll('.accordion-item'));
});
accordionItems.forEach((accItem, accndex) => {


    accItem.forEach((item, index) => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            accItem.forEach((accordionItem, i) => {
                if (i !== index) {
                    accordionItem.classList.remove('active');
                    const content = accordionItem.querySelector('.accordion-content');
                    content.style.maxHeight = null;
                    content.classList.add('collapsing');
                    setTimeout(() => {
                        content.classList.remove('collapsing');
                    }, 100);
                }
            });

            item.classList.add('active');
            const content = item.querySelector('.accordion-content');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }

            let translateX;
            if (index === 0) {
                translateX = 0;
            } else if (index === 1) {
                translateX = "-33.33%";
            } else if (index === 2) {
                translateX = "-66.66%";
            }

            const mockupScreen = item.parentElement.parentElement.querySelector('.mockupScreens');

            mockupScreen.style.transform = `translateX(${translateX})`;
        });

        if (index === 0) {
            item.classList.add('active');
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});