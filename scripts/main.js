$(document).ready(function () {
    $('#home').show();
    $('#about').hide();
    $('#contact').hide();
    $('#portfolioPage').hide();
    $('#modal').hide();

    $('#homeButton').on('click', function () {
        $('#home').fadeIn(1000);
        $('#about').hide();
        $('#contact').hide();
        $('#portfolioPage').hide();
    });
    
    $('#aboutButton').on('click', function () {
        $('#about').fadeIn(1000);
        $('#home').hide();
        $('#contact').hide();
        $('#portfolioPage').hide();
    });

    $('#contactButton').on('click', function () {
        $('#contact').fadeIn(1000);
        $('#about').hide();
        $('#home').hide();
        $('#portfolioPage').hide();
    });

    $('#portfolioButton').on('click', function () {
        $('#portfolioPage').fadeIn(1000);
        $('#contact').hide();
        $('#about').hide();
        $('#home').hide();
    });

    $('.openModal').on('click', function () {
        $('#modal').show();
    });

    $('.closeModal').on('click', function () {
        $('#modal').hide();
    });

});