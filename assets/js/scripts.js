
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

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item, index) => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // Diğer tüm açık öğeleri kapat
        accordionItems.forEach((accordionItem, i) => {
            if (i !== index) {
                accordionItem.classList.remove('active');
                const content = accordionItem.querySelector('.accordion-content');
                content.style.maxHeight = null; // "collapsing" sınıfını temizle
                content.classList.add('collapsing'); // "collapsing" sınıfını ekleyin
                setTimeout(() => {
                    content.classList.remove('collapsing'); // 0.5 saniye sonra "collapsing" sınıfını kaldırın
                }, 500);
            }
        });

        // Tıklanan öğeyi aç veya kapat
        item.classList.add('active');
        const content = item.querySelector('.accordion-content');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });

    // İlk öğeyi varsayılan olarak açık yap (index 0)
    if (index === 0) {
        item.classList.add('active');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
});