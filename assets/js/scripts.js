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
/*
1. Her sliderin icinde kartdan elave displayi none olan bir image olsun. 
2. Bir function olsun ve bu sehife yuklenende bu imageleri gotursun mockupin icinde yan yana duzsun ama birinci gorunen her zaman "swiper.activeIndex" olsun. 
3. Bir function daha olsun ve burada "on('slideChange', ()=> {})" islesin. Bu function her defe slayd deyisdiyinde "swiper.activeIndex" e gore mockupin icindeki yan yana duran sekilleri transfrom.translateX ne faiz versin. Belelikle mockupin ici soldan saga ve ya tersi istiqametinde hereket edecek. Bundan once  "swiper.slides" (Bu slidelerin umumi sayini goturur) lengthini gotur ve 100u bu lengthe bol. Cixan deyeri "swiper.activeIndex"e vur, belelikle mockup icinde her sekil nece faiz saga sola hereket etmeli oldugunu hesablamis olacaq. 
4. Saga ve ya sola hereket etmeli oldugunu ise "on('slidePrevTransitionStart', ()=> {})" ve "on('slideNextTransitionStart', ()=> {})" ile teyin et. Bir dene var teyin et, deyeri default olaraq "true" olsun, eger true-dursa "+", "false"-dursa "-" olsun. 
*/

// function myPlugin({ swiper, extendParams, on }) {
//     extendParams({
//         debugger: false,
//     });

//     on('slidePrevTransitionStart', () => {
//         console.log("slidePrevTransitionStart")
//     })
//     on('slideNextTransitionStart', () => {
//         console.log("slideNextTransitionStart")
//     })
//     on('slideChange', () => {
//         if (!swiper.params.debugger) return;
//         console.log(
//             'slideChange',
//             swiper.previousIndex,
//             '->',
//             swiper.activeIndex
//         );
//     });

// }

// Init Swiper
var swiperBay = new Swiper('.swiperBay', {
    slidesPerView: 3.38719,
    autoHeight: true,
    spaceBetween: 24,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // modules: [myPlugin],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    debugger: true,
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
    // spaceBetween: 96,
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