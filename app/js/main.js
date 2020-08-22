$(function () {
    $('.promo-section__slider').slick({
        dots: true,
        speed: 800,
        autoplay: true,
        prevArrow: "<button class='promo-section__arrow'><img src='../images/icons/arrow-left.svg'></button>",
        nextArrow: "    <button class='promo-section__arrow promo-section__arrow--right'><img" +
            " src='../images/icons/arrow-right.svg'></button>",
    });

    $('.header__category-link').on('click', function () {
        $('.header__category-link').removeClass('header__category-link--active');
        $(this).addClass('header__category-link--active')
    });

    $('.search__tab').on('click', function (event) {
        var id = $(this).attr('data-id'); //забирает значение атрибута
        $('.search__tab').removeClass('search__tab--active');
        $('.search__content').removeClass('search__content--active').hide();
        $(this).addClass('search__tab--active');
        $('#'+id).addClass('search__content--active').fadeIn() //добавляем класс по полученному значению атрибута
    })

    // $('.search__tabs .search__tab').on('click', function(event) {
    //     var id = $(this).attr('data-id');
    //     $('.search').find('.search__content').removeClass('search__content--active').hide();
    //     $('.search .search__tabs').find('.search__tab').removeClass('search__tab--active');
    //     $(this).addClass('search__tab--active');
    //     $('#'+id).addClass('search__content--active').fadeIn();
    //     return false;
    // });

});