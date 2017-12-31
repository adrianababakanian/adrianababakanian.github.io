$(document).ready(function(){


    $(document).ready(function() {
      $('.fade').stop(true).fadeIn({
        duration: 1000,
        queue: false
      }).css('display', 'none').slideDown(1000, "linear");
    });

    $('.dropdown').click(function() {
        $('.dropdown-content').toggle();
        $(".bar").toggleClass("act");
    });

    $('.dropdown_alt').click(function() {
        $('.dropdown-content_alt').toggle();
        $(".bar_alt").toggleClass("act_alt");
        $(".home").toggleClass("hide");
    });

    $('.home').click(function() {
        $(".dropdown_alt").toggleClass("hide");
    });
});
