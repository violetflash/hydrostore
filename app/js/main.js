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
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        // autoplay: true,
        speed: 800,
        // arrows: false
    });


    var stHeight = $('.slick-track').height();
    $('.slick-slide').css('height',stHeight + 'px' );


    $('.header__category-link').on('click', function () {
        $('.header__category-link').removeClass('header__category-link--active');
        $(this).addClass('header__category-link--active')
    });

    $('.tab').on('click', function (event) {
        var id = $(this).attr('data-id'); //забирает значение атрибута
        $('.tab').removeClass('tab--active');
        $('.tab-content').removeClass('tab-content--active').hide();
        $(this).addClass('tab--active');
        $('#' + id).addClass('tab-content--active').fadeIn() //добавляем класс по полученному значению атрибута
    })

    $('.products__like').on('click', function () {
        $(this).toggleClass('products__like--liked');


    })

})
    ;