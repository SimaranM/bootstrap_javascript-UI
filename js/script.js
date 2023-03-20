// ------------------------------------------LTR-----------RTL------------------------------------------
$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 3,
            },
            600: {
                items: 3,
                dotsEach: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
});
// ----------------------------------bg-pages------------------------------------------------
var counted = 0;
$(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate({
                countNum: countTo,
            }, {
                duration: 2000,
                easing: "swing",
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                },
            });
        });
        counted = 1;
    }
});
// ---------------------------------------------FAQs-------------------------------------------------------
function toggleIcon(e) {
    $(e.target)
        .prev(".panel-heading")
        .find(".more-less")
        .toggleClass("glyphicon-plus glyphicon-minus");
}
$(".panel-group").on("hidden.bs.collapse", toggleIcon);
$(".panel-group").on("shown.bs.collapse", toggleIcon);
// ---------------------------------------------Sticky--button--------------------------------------------------------
var btn = $("#button");

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});

btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "300");
});
// ------------------------------------------------------sticky-hadar----------------------------------
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});