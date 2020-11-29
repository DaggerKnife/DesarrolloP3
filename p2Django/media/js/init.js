(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});


$(".dropdown-trigger").dropdown();


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('select').formSelect();
});
      

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.modal').modal();
});




//////


//date picker

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, options);
  format: 'dd/mm/yyyy'  
});

// Or with jQuery

$(document).ready(function(){
  $('.datepicker').datepicker();
});
     



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.tap-target').tapTarget();
});




var instance = M.Carousel.init({
  fullWidth: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});
    