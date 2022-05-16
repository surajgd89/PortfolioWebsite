/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i) => {
    console.log(mb);
    mb.addEventListener('click', () => {
        modal(i);
    })
});

modalClose.forEach((mc, i) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        })
    })
});


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */

const linkwork = document.querySelectorAll('.work__item');
function activeWork() {
    linkwork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work');
}

linkwork.forEach(l => l.addEventListener('click', activeWork))


/*=============== SWIPER TESTIMONIAL ===============*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

