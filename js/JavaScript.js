$('.carousel').carousel({
  interval: 3000
});

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

AOS.init();


$(function () {
    $('[data-toggle="popover"]').popover()
        });