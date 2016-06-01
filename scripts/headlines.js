(function($) {
    $(function() {
      var viewportWidth = $(window).width();
      if (viewportWidth < 769) {
        $("wrapper").removeClass("jcarousel-wrapper");
        $("wrapper").removeClass("jcarousel");
      }
      else {
        $("wrapper").addClass("jcarousel-wrapper");
        $("wrapper").addClass("jcarousel");
      }
    });
})(jQuery);