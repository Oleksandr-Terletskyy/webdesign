
$(function () {
    $(window).resize(function () {
        if ($(window).width() < 769) {
            $('.width_check').removeClass('header');
            $('.width_check').addClass('header1');

        }
        else {
            $('.width_check').removeClass('header1');
            $('.width_check').addClass('header');
        }
    })
    if ($(window).width() < 769) {
        $('.width_check').removeClass('header');
        $('.width_check').addClass('header1');

    }
    else {
        $('.width_check').removeClass('header1');
        $('.width_check').addClass('header');
    }

    $(window).scroll(function () {
        let hed = $('header')

        if ($(document).scrollTop() > 50) {
            hed.addClass('head_scroll');

            $('.line').css({ 'display': 'none', });
            $('.main_head').css({ 'margin': 0 });


        } else {
            hed.removeClass('head_scroll');
            $('.line').css({ 'display': 'block', });
            $('.main_head').css({ 'margin': '19px' });


        }
        if ($(document).scrollTop() > 250) {
            hed.css({ 'height': '80px', });

            ;
        } else {
            hed.css({ 'height': '130px', });

        }
    });


    $('.burger1').click(function () {
        $(this).toggleClass('active');
        $('.width_check').toggleClass('show');

    });

    $('.child').each(function () {
        if ($(this).find('> img').length) {
            $(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
        };
    });



    function popupOpenClose(popup) {
        if ($(".wrapper").length == 0) {
            $(popup).wrapInner("<div class='wrapper'></div>");
        }
        $(popup).show();
        $(popup).click(function (e) {
            if (e.target == this) {
                if ($(popup).is(':visible')) {
                    $(popup).hide();
                }
            }
        });

    }

    $(document).ready(function () {
        $("[data-js=open]").on("click", function (e) {
            popupOpenClose($(".popup"));
            // let image_src = $(e.target).find('img')[0].src;
            let image_src = $(e.target).find('img')[0].src;



            let text = $(e.target).find('h1').text();
            let text2 = $(e.target).find('p').text();
            // $('.img_pop').attr('src', `${image_src}`);
            $('.img_pop').attr('src', `${image_src}`);



            $('.pic_title_pop').text(`${text}`);
            $('.pic_desc_pop').text(`${text2}`);
        });
    });
    // $(document).ready(function () {
    //     $("[data-js=open_v]").on("click", function (e) {
    //         popupOpenClose($(".popup_v"));
    //         let video_src = $('.pop2').find('video')[0].src;
    //         let text = $('.pop2').find('h1').text();
    //         let text2 = $('.pop2').find('p').text();
    //         $('.video_pop').attr('src', `${video_src}`);
    //         $('.pic_title_pop').text(`${text}`);
    //         $('.pic_desc_pop').text(`${text2}`);
    //     });
    // });

    $(".search a").click(function () {
        $(this).parent(".search").toggleClass("collapsed");
    });

   





});


