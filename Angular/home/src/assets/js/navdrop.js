
$(document).ready(function() {
  $('#navbarDropdown').mouseenter(function() {
    $('.dropdown-menu').slideToggle(500, "linear");
  });
  
  $('.dropdown-menu').mouseleave(function() {
    $(this).slideToggle(500, "linear");
  });
});
