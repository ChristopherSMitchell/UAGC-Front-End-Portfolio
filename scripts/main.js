$(document).ready(function() {
  $('#home').show();
  $('#about').hide();
  $('#contact').hide();
  $('#portfolioPage').hide();
  
  $('#homeButton').on('click', function() {
    $('#home').fadeIn(1000);
    $('#about').hide();
    $('#contact').hide();
  });
  $('#aboutButton').on('click', function() {
    $('#about').fadeIn(1000);
    $('#home').hide();
    $('#contact').hide();
  });
  
  $('#contactButton').on('click', function() {
    $('#contact').fadeIn(1000);
    $('#about').hide();
    $('#home').hide();
  });
  
  $('#portfolioButton').on('click', function() {
    $('#portfolioPage').slideToggle(1000);
  });
});