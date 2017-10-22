$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$("#homeButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 56
    }, 2000);
});

$('#footerLinks').localScroll();
$('#navbarLinks').localScroll();

//ScrollReveal
window.sr = ScrollReveal({reset: false});
sr.reveal('#home', {duration: 4000});
sr.reveal('#aboutCont', {duration: 3000}, 50);
sr.reveal('#atWork', {duration: 2500}, 50);
sr.reveal('#horRule', {duration: 2500}, 50);
sr.reveal('#wp1', {duration: 2500}, 50);
sr.reveal('#wp2', {duration: 2500}, 50);
sr.reveal('#atHome', {duration: 2500}, 50);
sr.reveal('#horRule2', {duration: 2500}, 50);
sr.reveal('#hp1', {duration: 2500}, 50);
sr.reveal('#hp2', {duration: 2500}, 50);
sr.reveal('#hp3', {duration: 2500}, 50);
sr.reveal('#resumePage', {duration: 3000}, 50);
sr.reveal('#resumeCont', {duration: 2500}, 50);
sr.reveal('.col-md-4', {duration: 5000}, 25);


