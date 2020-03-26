$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: false,
        speed: 900,
        draggable: false, //отключить листание мышкой слайдов на desktop
        //swipe: false, //отключить листание мышкой слайдов на тачскрин
        //touchTHreshold: 5, //по умолчанию 5 //для того чтобы сработал слайд нужно просвайпить меньшее расстояние при увеличениии значения нужно сделать меньшее усилие и наоборот
        //touchMove:false //при перетаскивании пальцем мы не увидим перемещения но когда прошол это расстояние то переключится touchTHreshold:5
        //adaptiveHeight: true,
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
  });