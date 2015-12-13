$(document).ready(function() {

	$('#menu-toggle').click(function (e) {
      $('.menu').toggleClass('open');
      e.preventDefault();
    });
    
});