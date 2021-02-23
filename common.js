$('.parallax').css('visibility','hidden');
$(window).on('load scroll', function() {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
   $('.parallax').each(function(){
    var targetPosition = $(this).offset().top;
    if(topWindow > targetPosition - windowHeight + 100){
      $(this).addClass("fade-in");
    }
  });
});