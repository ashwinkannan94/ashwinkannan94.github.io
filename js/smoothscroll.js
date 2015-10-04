
$(function () {

$('a[href^="#"]').click(function(event) {
var id = $(this).attr("href");
var offset = 50;
var target = $(id).offset().top - offset;

$('html, body').animate({scrollTop:target}, 500);
event.preventDefault();
});

});
