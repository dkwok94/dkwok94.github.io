$(window).on("load", function() {
    $(".loader .inner").fadeOut(1000, function() {
        $(".loader").fadeOut(1250);
    });

    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});


// Superslides transitions
$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        animation_speed: 'slow',
        pagination: false
    });

    // Typed Plugin
    var typed = new Typed(".typed", {
        strings: ['Software Engineer.', 'Traveler.', 'Musician.', 'Lifelong Learner.'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        dots: true,
        items: 9,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });
        }
    });

    $('[data-fancybox]').fancybox();


    // Portfolio Filter
    $('#filters a').click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function(event){
        event.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition - 70,
        }, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    // Sticky Navigation Bar
    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
    $(window).on("scroll", stickyNavigation);

    var items = document.querySelectorAll(".timeline li");
 
// code for the isElementInViewport function
 
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
            }
        }
    }
    
    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    
});