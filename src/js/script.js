$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: false,
        speed: 900,
        draggable: false, //отключить листание мышкой слайдов на desktop
        //swipe: false, //отключить листание мышкой слайдов на тачскрин
        //touchTHreshold: 5, //по умолчанию 5 //для того чтобы сработал слайд нужно просвайпить меньшее расстояние при увеличениии значения нужно сделать меньшее усилие и наоборот
        //touchMove: false //при перетаскивании пальцем мы не увидим перемещения но когда прошол это расстояние то переключится touchTHreshold:5
        //adaptiveHeight: true,
        waitForAnimate: false, //по умолчанию включена // на сколько быстро пользователь будет нажимать на стрелку на столько быстро будет перелистываться
        //ceterMode: true, //когда показывается несколько слайдов, то один будет строго по центру 
        //rows: 3, //3 ряда
        //slidesPerRow: 2 //количество слайдов в ряду
        // vertical: true //вертикальный слайдер
        // verticalSwiping: true //вертикальная прокрутка
        // fade: true // красивое слайд-шоу, не листаются
        // asNavFor:".slider" //указываем слайдер с которым связыаемся(можно сделать эффект увеличения, т.е. листая нижний на верхнем те же картинки в увеличеном виде)
        // appendArrows:$(.content)// поместить стрелки в класс .content
        // appendDots:$(.content)// поместить  точки в класс .content
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link-more').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list-block').eq(i).toggleClass('catalog-item__list-block_active');
    //     })
    // });

    // $('.catalog-item__link-back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list-block').eq(i).toggleClass('catalog-item__list-block_active');
    //     })
    // });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list-block').eq(i).toggleClass('catalog-item__list-block_active');
            })
        });
    }

    toggleSlide('.catalog-item__link-more');
    toggleSlide('.catalog-item__link-back');
});

