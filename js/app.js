window.location.replace("http://adrianababakanian.io");

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

    $('.hider').click(function() {
        $(".box").addClass("navCoverShow");
        $(".header-continer").addClass("shiftUp");
    });

    $('.navClose').click(function() {
        $(".box").removeClass("navCoverShow");
        $(".header-continer").removeClass("shiftUp");
        $(".terminal").removeClass("shift");
    });

    if ($(window).width() < 1000) {
        $("img").addClass("forceWidth");
        $(".flyer").removeClass("forceWidthAutoHeight");
    }
    else {
       $("img").removeClass("forceWidth");
       $(".flyer").addClass("forceWidthAutoHeight");
    }

    $(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        $(".homeHeader").addClass("homeHeaderFill");
        $(".footer").addClass("footerShift");
        $(".fader").addClass("show");
    } else {
        $(".homeHeader").removeClass("homeHeaderFill");
        $(".footer").removeClass("footerShift");
        $(".fader").removeClass("show");
    }
    });




});
