$(document).ready(function () {
 var viewportWidth = $(window).width();
    if (viewportWidth < 450) {
      $("wrapper").removeClass("jcarousel-wrapper");
      $("wrapper").removeClass("jcarousel");
    }
    if (viewportWidth > 450) {
      $("wrapper").addClass("jcarousel-wrapper");
      $("wrapper").addClass("jcarousel");
    }
});