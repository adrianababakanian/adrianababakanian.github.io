$(document).ready(function(){

    function processAjaxData(response, urlPath){
       document.getElementById("content").innerHTML = response.html;
       document.title = response.pageTitle;
       window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
    }

     window.onpopstate = function(e){
        if(e.state){
            document.getElementById("content").innerHTML = e.state.html;
            document.title = e.state.pageTitle;
        }
    };

    $(document).ready(function() {
      $('.fade').stop(true).fadeIn({
        duration: 1000,
        queue: false
      }).css('display', 'none').slideDown(1000, "linear");
    });

    // Dropdown Animations

    $('.dropdown').click(function() {
        $('.dropdown-content').fadeToggle(200,"linear");
        $(".bar").toggleClass("act");
        $(".terminal").removeClass("shift");
    });

    $('.dropdown_alt').click(function() {
        $('.dropdown-content_alt').toggle();
        $(".bar_alt").toggleClass("act_alt");
        $(".home").toggleClass("hide");
    });

    $('.home').click(function() {
        $(".dropdown_alt").toggleClass("hide");
    });

    // Terminal Animations

    $('.magenta').click(function() {
        $(".terminal").addClass("shift");
        $(".terminal-stay").addClass("show");
        $(".intro-button").removeClass("intro-shifter");
    });

    $('.pink').click(function() {
      $(".terminal").addClass("shift");
      $(".terminal-stay").addClass("show");
      $(".intro-button").removeClass("intro-shifter");
    });

    $('.lavender').click(function() {
      $(".terminal").addClass("shift");
      $(".terminal-stay").addClass("show");
      $(".intro-button").removeClass("intro-shifter");
    });

    $('.intro-button').click(function() {
        $(".terminal").removeClass("shift");
        $(".intro-button").addClass("intro-shifter");
    });
});
