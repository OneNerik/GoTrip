// calousel

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    startPosition: 1,
    items: 1,
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:2,
        },
        700:{
            items:1,
        },
        1000:{
            items:2,
            startPosition: 0,
        },
        1270:{
            items:3,
            startPosition: 1,
        }
    }
});

$('.prev').click(function() {

    owl.trigger('prev.owl.carousel', [300]);
})

$('.next').click(function() {
    owl.trigger('next.owl.carousel');
})

// burger-menu

const nawBtn = document.querySelector('.nav_toggle');
const nav = document.querySelector('.naw')
const menuIcon = document.querySelector('.menu-icon');

nawBtn.onclick = function () {
    nav.classList.toggle('nav_mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('.no-scroll');
};


