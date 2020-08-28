$(function () {
    $('.promo-section__slider').slick({
        dots: true,
        speed: 800,
        autoplay: true,
        prevArrow: "<button class='promo-section__arrow'><img src='../images/icons/arrow-left.svg'></button>",
        nextArrow: "    <button class='promo-section__arrow promo-section__arrow--right'><img" +
            " src='../images/icons/arrow-right.svg'></button>",
    });

    $('.products__slider').slick({
        prevArrow: '<button class="products__arrow"><img src="../images/icons/left-arrow-black.svg"></button>',
        nextArrow: '<button class="products__arrow products__arrow--right"><img src="../images/icons/right-arrow-black.svg"></button>',
        slidesToShow: 4,
        slidesToScroll: 2,
        // adaptiveHeight: true,
        // autoplay: true,
        speed: 800,

    });


    // var stHeight = $('.slick-track').height();
    // $('.slick-slide').css('height',stHeight + 'px' );


    $('.header__category-link').on('click', function () {
        $('.header__category-link').removeClass('header__category-link--active');
        $(this).addClass('header__category-link--active')
    });

    $('.tab').on('click', function (event) {
        var id = $(this).attr('data-id'); //забирает значение атрибута
        $($(this).siblings()).removeClass('tab--active'); //siblings - метод, поиск по соседним элементам
        $($(this).parent().siblings().find('div')).removeClass('tab-content--active');
        $(this).addClass('tab--active');
        $('#' + id).addClass('tab-content--active') //добавляем класс по полученному значению атрибута
    });

    $('.products__like').on('click', function () {
        $(this).toggleClass('products__like--liked');


    })

});