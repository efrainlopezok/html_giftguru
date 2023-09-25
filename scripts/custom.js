jQuery(document).ready(function($) {

    /*
	Slider
    -------------------*/
    if ($('.slider').length > 0) {
        $(".slider").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 500,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            arrows: true
        });
    }

    /*
    Form Steps
    -----------------*/
    $('.button-step').click(function() {
        $(this).parents('.form-steps').find('.step').addClass('hide');
        $('.form-steps .step[data-step="' + $(this).attr('data-step') + '"]').removeClass('hide');
    });

    /*
    Add Custom Interest
    -------------------*/
    $('.add-custom-interest').click(function() {
        if ($('.custom-interest .input-custom').length > 0) {
            var data_pos = parseInt($('.custom-interest').attr('data-pos')) + 1;
            if (data_pos > 3)
                data_pos = 1;
            $('.custom-interest').attr('data-pos', data_pos);
            $('<input type="checkbox" checked="true" class="input-custom" value="' + $('input[name="custom-interest"').val() + '" name="custom-' + $('input[name="custom-interest"').val() + '" id="custom-' + $('input[name="custom-interest"').val() + '" /><label for="custom-' + $('input[name="custom-interest"').val() + '">{ ' + $('input[name="custom-interest"').val() + ' }</label>').appendTo('.custom-interest > div:nth-child(' + data_pos + ')');
        } else {
            $('.custom-interest').attr('data-pos', '1');
            $('<input type="checkbox" checked="true" class="input-custom" value="' + $('input[name="custom-interest"').val() + '" name="custom-' + $('input[name="custom-interest"').val() + '" id="custom-' + $('input[name="custom-interest"').val() + '" /><label for="custom-' + $('input[name="custom-interest"').val() + '">{ ' + $('input[name="custom-interest"').val() + ' }</label>').appendTo('.custom-interest > div:nth-child(1)');
        }
        $('input[name="custom-interest"').val('');
    });

    /*
    Event Action
    ----------------*/
    $('.r-event .r-event-info .button').click(function() {
        if ($(this).hasClass('green')) {
            $(this).removeClass('green').addClass('white-b-green').text('Add to Event').parent().parent().parent().find('.event-info-detail').slideUp(500);
        } else {
            $(this).removeClass('white-b-green').addClass('green').text('Remove from Event').parent().parent().parent().find('.event-info-detail').slideDown(500);
        }
    });

    /*
    Load More Product List
    ----------------*/
    if ($('.products-list').length) {
        var product_items = parseInt($('.products-list').attr('show-items')) + 1;
        $('.products-list .row > div:nth-child(n+' + product_items + ')').fadeOut(1).addClass('item-hide');
        $('.products-list .load-more').click(function(event) {
            event.preventDefault();
            $('.products-list .row > div.item-hide').each(function(pos) {
                if (pos + 1 <= product_items)
                    $(this).fadeIn(500).removeClass('item-hide');
            });

            if ($('.products-list .row > div.item-hide').length == 0)
                $(this).fadeOut(300);
        });
    }

    /*
    Load More Blog List
    ----------------*/
    if ($('.blog-list').length) {
        var blog_items = parseInt($('.blog-list-container').attr('show-items')) + 1;
        $('.blog-list-container > div:nth-child(n+' + blog_items + ')').fadeOut(1).addClass('item-hide');
        $('.blog-list-container .load-more').click(function(event) {
            event.preventDefault();
            $('.blog-list-container > div.item-hide').each(function(pos) {
                if (pos + 1 <= blog_items)
                    $(this).fadeIn(500).removeClass('item-hide');
            });

            if ($('.blog-list-container > div.item-hide').length == 0)
                $(this).fadeOut(300);
        });
    }

    /*
    Validation Contact Form
    ------------------------*/
    $('.send-contact-message').click(function(event) {
        event.preventDefault();
        $(this).parent().find('.required').each(function() {
            if (!$(this).val()) {
                $('label[for="' + $(this).attr('id') + '"]').addClass('label-error');
                $(this).addClass('input-error');
            } else {
                $('label[for="' + $(this).attr('id') + '"]').removeClass('label-error');
                $(this).removeClass('input-error');
            }

            if ($(this).attr('name') == 'email') {
                var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                if (filter.test($(this).val())) {
                    $('label[for="' + $(this).attr('id') + '"]').removeClass('label-email-error');
                    $(this).removeClass('input-email-error');
                } else {
                    $('label[for="' + $(this).attr('id') + '"]').addClass('label-email-error');
                    $(this).addClass('input-email-error');
                }
            }
        });

        if ($('.required.input-error, .required.input-email-error').length == 0) {
            $('.msg-contact').removeClass('hide');
            $('label').addClass('disabled');
            $('input, textarea').attr('disabled', 'disabled');
        }

    });

    /*
    Stiky Home
    -----------------*/
    if ($('.navbar').length) {
        var orgElementPos = $('.navbar').offset();
        orgElementTop = orgElementPos.top + 5;

        $(window).scroll(function() {
            if ($(window).scrollTop() >= (orgElementTop)) {
                $('.navbar').addClass('navbar-fixed-top');

                $('.top-menu').insertBefore('#navbar .navbar-nav');
                $('.main-logo').insertBefore('#navbar .navbar-nav');
            } else {
                $('.navbar').removeClass('navbar-fixed-top');
                $('.main-logo').appendTo('.top-header');
                $('.top-menu').insertBefore('.main-logo');

            }
        });
    }

    /*
    Stiky Inner Pages
    --------------------*/
    $('.logged .main-nav').css('width', $(window).width()).css('top', $('.logged .main-header .logo').height() + $('.logged .sidebar').height() + 10);
    $(window).resize(function() {
        $('.logged .main-nav').css('width', $(window).width()).css('top', $('.logged .main-header .logo').height() + $('.logged .sidebar').height() + 10);
    });

    /*
    Auto Sign Tab
    ----------------*/
    $('.top-menu a[href="#sign-in"], .slide a[href="#sign-in"]').click(function() {
        $('.nav-tabs a[href="#sign-in"]').tab('show');
    });
    $('.top-menu a[href="#sign-up"], .slide a[href="#sign-up"]').click(function() {
        $('.nav-tabs a[href="#sign-up"]').tab('show');
    });

    /*
    Scroll to
    -------------------*/
    $('.navbar-nav a, .footer-menu a').click(function(event) {
        var n_link = $(this).attr('href');
        $('html,body').animate({
                scrollTop: $(n_link).offset().top - 50
            },
            'slow');
    });

    /*
    Verify section
    ----------------------*/
    var result = window.location.href.split('#');
    if (result.length > 1) {
        if (result[1]) {
            var i_to = '#' + result[1];
            $('html,body').animate({
                    scrollTop: $(i_to).offset().top - 50
                },
                'slow');
        }
    }

    /**
     * Close Button section
     */
    $('.close-button').on('click', function(event) {
        event.preventDefault();
        $('#' + $(this).attr('id-action')).fadeOut(500);
    });

    /**
     * Slide Button section
     */
    $('.slide-button').on('click', function(event) {
        event.preventDefault();
        $('.' + $(this).attr('id-action')).fadeToggle(500);
    });

});