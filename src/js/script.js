$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.dropdown-trigger').dropdown();
    $('select').formSelect();
});

$(function () {
   $('#retour').click(function () {
        $('html,body').animate({scrollTop: 0}, "slow");
   });
});