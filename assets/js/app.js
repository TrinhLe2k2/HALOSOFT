
var swiper = new Swiper(".bannerSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: "fade",
    loop: true
});

var swiper = new Swiper(".ShareSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
});

function HandlerSubmitToCart() {
    var addtocartbtns = $('.box-product .add-to-cart-btn');
    addtocartbtns.on('click', function(e) {
        e.preventDefault();
        $(this).closest('.box-product').find('.submit-to-cart-box').removeClass('d-none');
        $(this).closest('.box-product').find('.btn-eye').removeClass('d-none');
    });
    
    var colses = $('.box-product .btn-close');
    colses.on('click', function(e) {
        e.preventDefault();
        $(this).closest('.box-product').find('.submit-to-cart-box').addClass('d-none');
        $(this).closest('.box-product').find('.btn-eye').addClass('d-none');
    });
}

HandlerSubmitToCart();

document.getElementById('scrollTopBtn').addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});