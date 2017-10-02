$(document).ready(function(){
  //menu hamburger
  $(".mobile-navegation").on("click", function() {
    $(".navegation-link-content").toggle('slide', {
            direction: 'left'
        }, 1000);
  });
  $('.navegation-link-content').click(function(event){
    event.stopPropagation();
  });
  //scroll to top show
  $(document).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
  });
  //scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

});//wrapper end
