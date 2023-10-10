
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
var swiper = new Swiper(".awardsSwiper", {
    slidesPerView: "auto",
    pagination: false,
    spaceBetween: 64,
    slidesPerView: 4,
    breakpoints: {
        320: {
            slidesPerView: 1.4,
            spaceBetween: 16,
        },
        375: {
            slidesPerView: 1.65,
            spaceBetween: 24,
        },
        450: {
            slidesPerView: 2,
        },
        525: {
            slidesPerView: 2.25,
        },
        625: {
            slidesPerView: 2.75,
        },
        725: {
            slidesPerView: 3,
        },
        825: {
            slidesPerView: 3.25,
            spaceBetween: 64,
        },
        900: {
            slidesPerView: 3.5,
        },
        1000: {
            slidesPerView: 3.75,
        },
        1200: {
            slidesPerView: 4,
        },
    },
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

var swiperBay = new Swiper('.swiperBay', {
    slidesPerView: 3.38719,
    autoHeight: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.04,
            spaceBetween: 16,
        },
        350: {
            slidesPerView: 1.2,
        },
        420: {
            slidesPerView: 1.4,
        },
        520: {
            slidesPerView: 1.5,
        },
        600: {
            slidesPerView: 1.8,
        },
        720: {
            slidesPerView: 2.1,
            spaceBetween: 24,
        },
        820: {
            slidesPerView: 2.4,
        },
        920: {
            slidesPerView: 2.6,
        },
        1020: {
            slidesPerView: 2.6,
        },
        1120: {
            slidesPerView: 2.8,
        },
        1220: {
            slidesPerView: 3.2,
        },
        1320: {
            slidesPerView: 3.45,
        }
    }
});

var swiper = new Swiper(".ValueSwiper", {
    slidesPerView: 2,
    pagination: false,
    grid: {
        rows: 2,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            grid: false,
            spaceBetween: 32,
        },
        375: {
            slidesPerView: 1.45,
            grid: false,
        },
        450: {
            slidesPerView: 1.65,
            grid: false,
        },
        525: {
            slidesPerView: 1.85,
            grid: false,
        },
        625: {
            slidesPerView: 2,
            grid: false,
        },
        725: {
            slidesPerView: 2.25,
            grid: false,
        },
        825: {
            slidesPerView: 2.5,
            grid: false,
        },
        1024: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
    },
});

var swiper = new Swiper(".refSwiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: false,
    breakpoints: {
        320: {
            slidesPerView: 1.18,
            spaceBetween: 16,
        },
        375: {
            slidesPerView: 1.35,
            spaceBetween: 16,
        },
        450: {
            slidesPerView: 1.45,
            spaceBetween: 16,
        },
        525: {
            slidesPerView: 1.65,
            spaceBetween: 16,
        },
        625: {
            slidesPerView: 1.8,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2.25,
            spaceBetween: 32,
        },
        825: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".userSwiper", {
    slidesPerView: 5,
    spaceBetween: 32,
    pagination: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        375: {
            slidesPerView: 1.75,
            spaceBetween: 16,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        525: {
            slidesPerView: 2.4,
            spaceBetween: 16,
        },
        650: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3.25,
            spaceBetween: 32,
        },
        900: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

TweenMax.from(".nav-logo", 0.5, {
    delay: 0.2,
    y: -50,
    opacity: 0
});
TweenMax.from(".nav-btn", 0.5, {
    delay: 0.35,
    y: -50,
    opacity: 0
});
TweenMax.from(".la-header__title", 0.5, {
    delay: 0.2,
    x: -50,
    opacity: 0
});
TweenMax.from(".la-header__text", 0.5, {
    delay: 0.25,
    x: -50,
    opacity: 0
});
TweenMax.from(".la-header__bottom-text", 0.5, {
    delay: 0.25,
    y: -50,
    opacity: 0
});
TweenMax.from(".header-btn1", 0.5, {
    delay: 0.30,
    x: -50,
    opacity: 0
});
TweenMax.from(".header-btn2", 0.5, {
    delay: 0.35,
    x: -50,
    opacity: 0
});
TweenMax.from(".la-header__right", 0.5, {
    delay: 0.2,
    x: 50,
    opacity: 0
});
TweenMax.from(".circle-1", 0.5, {
    delay: 0.2,
    y: -50,
    opacity: 0
});
TweenMax.from(".circle-2", 0.5, {
    delay: 0.2,
    x: -50,
    opacity: 0
});
let laAwards = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-awards',
        start: 'top 75%'
    }
});
laAwards.from('.la-awards', {
    y: 75,
    opacity: 0,
    duration: 0.3
});
let laSection1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section1',
        start: 'top 75%'
    }
});
laSection1.from('.la-section1', {
    y: 50,
    opacity: 0,
    duration: 0.3
});
let laSection2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section2',
        start: 'top 75%'
    }
});
laSection2.from('.la-section2', {
    y: 100,
    opacity: 0,
    duration: 0.3
});
let laSection3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section3',
        start: 'top 75%'
    }
});
laSection3.from('.la-section3', {
    y: 100,
    opacity: 0,
    duration: 0.3
});
let laSection4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section4',
        start: 'top 75%'
    }
});
laSection4.from('.la-section4', {
    y: 100,
    opacity: 0,
    duration: 0.3
});
let laSection5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section5',
        start: 'top 75%'
    }
});
laSection5.from('.la-section5', {
    y: 100,
    opacity: 0,
    duration: 0.3
});
let laSection6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section6',
        start: 'top 75%'
    }
});
laSection6.from('.la-section6', {
    y: 100,
    opacity: 0,
    duration: 0.3
});
let laSection7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section7',
        start: 'top 75%'
    }
});
laSection7.from('.la-section7', {
    y: 100,
    opacity: 0,
    duration: 0.3
});
let laSection8 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section8',
        start: 'top 75%'
    }
});
laSection8.from('.la-section8', {
    y: 100,
    opacity: 0,
    duration: 0.3
});
let laSection9 = gsap.timeline({
    scrollTrigger: {
        trigger: '.la-section9',
        start: 'top 75%'
    }
});
laSection9.from('.la-section9', {
    y: 100,
    opacity: 0,
    duration: 0.3
});