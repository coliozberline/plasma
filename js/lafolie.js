$(document).scroll(function () {
    var y = $(this).scrollTop();
      if (y > 500) {
        $(".nav_bar").fadeIn(500);
        $(".nav_bar").addClass("show-navbar");
    } else {
      if (y < 500) {
        $(".nav_bar").removeClass("show-navbar");
    }
        $(".nav_bar").fadeOut(500);
    } 
});