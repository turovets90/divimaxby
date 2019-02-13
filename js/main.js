$(document).ready(function(){


    $('.search_btn').on('click', function(){
        $(this).parent().addClass('open');


        $(document).on('click', function(e) {
           if (!$(e.target).closest(".search_block.open").length) {
                $(".search_block.open").removeClass('open');
            }
            e.stopPropagation();
        });

    });

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    if($('.main_slider .m_slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            fade:true,
            speed: 1000,
            //autoplay: true,
            //autoplaySpeed: 2000,
        });
    }


    $('.slick_custom_btn.slick_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });

    $('.slick_custom_btn.slick_next').click(function(){
        $('.main_slider').slick('slickNext');
    });



    $('.partners_slider_prev').click(function(){
        $('.partners_slider').slick('slickPrev');
    });

    $('.partners_slider_next').click(function(){
        $('.partners_slider').slick('slickNext');
    });

    if($('.partners_slider > div').length > 4){
        $('.partners_slider').slick({
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.partners_slider > div').length > 1){
        $('.partners_slider').slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }else{
        $('.partners .slick_btn_group').hide();
    }

/*

    if($('.serv_slider_home .serv_slider_item').length >1){
        $('.serv_slider_home').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.serv_home_slider_nav',
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }


    $('.serv_home_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.serv_slider_home',
        dots: false,
        arrows: false,
        vertical:true,
        focusOnSelect: true,
    });


    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        console.log(header_height);
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });

        //if($(window).innerWidth() < 768){
            $('.crumb_title').css({
                'margin-top':header_height+'px'
            });
            $('.main_nav').css({
                'top':header_height+'px',
            });
        //}

    });
    $(window).resize();

*/

});


