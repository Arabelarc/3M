/*SCROLL HEADER*/
$(document).scroll(function() {    
  var scroll = $(this).scrollTop();
  if (scroll >= 658) {
      $(".header-scroll").addClass("active");
  } else {
      $(".header-scroll").removeClass("active");
  }
});
/*CAROUSEL*/
