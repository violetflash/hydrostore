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
        autoplay: true,
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

    $('.product__like').on('click', function () {
        $(this).toggleClass('product__like--liked');
    });

    $('.catalog__view').on('click', function () {
        $('.catalog__view').removeClass('active');
        $(this).addClass('active');
    });

    $('.catalog__grid').on('click', function () {
        $('.catalog .product').removeClass('list');
        $('.catalog__products').removeClass('list')
    });

    $('.catalog__list').on('click', function () {
        $('.catalog .product').addClass('list');
        $('.catalog__products').addClass('list')
    });

    $('.catalog__tag').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.pagination__item').on('click', function () {
        $('.pagination__item').removeClass('active');
        $(this).addClass('active');
    });

    $('.pagination__next').on('click', function () {
        $('.pagination__list').find('.pagination__item.active').next().addClass('active');
        $('.pagination__list').find('.pagination__item.active').prev().removeClass('active');
    });

    $('.pagination__prev').on('click', function () {
        $('.pagination__list').find('.pagination__item.active').prev().addClass('active');
        $('.pagination__list').find('.pagination__item.active').next().removeClass('active');
    });

    $('.filters__title').on('click', function () {
        $(this).toggleClass('opened').toggleClass('closed');
        $(this).siblings('.filters__box').toggleClass('opened').toggleClass('closed');
        // $(this).siblings('.filters__box.opened').addClass('closed').removeClass('opened');

    });

    $('.filters__hide').on('click', function () {
        $('.filters__box.opened').removeClass('opened').addClass('closed');
        $('.filters__title').removeClass('opened').addClass('closed');
    });

    $('.filters__show').on('click', function () {
        $('.filters__box.closed').removeClass('closed').addClass('opened');
        $('.filters__title').addClass('opened').removeClass('closed');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1300000,
        from: 100000,
        to: 500000,
        // grid: true
    });

});