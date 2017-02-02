$(document).ready(function() {

  //jQuery variable definition
  var $logo = $('.nav-logo');
  var $nav = $('.nav');
  var $navc = $('.nav-copy');
  var $under = $('.under');
  var $line = $('.under-line');
  var isHovered = $('#graphic').is(":hover");
  var $width = $('.menu').width();

  //animating the navigation bar when scrolling off the top of the document
  $(document).scroll(function() {
    $logo.animate({height: $(this).scrollTop() > 0? "40px":"60px"}, {duration: 100, queue: false, easing: "linear"});
    $nav.animate({height: $(this).scrollTop() > 0? "60px":"100px"}, {duration: 100, queue: false, easing: "linear"});
    $navc.animate({height: $(this).scrollTop() > 0? "60px":"100px"}, {duration: 100, queue: false, easing: "linear"});
    $under.animate({lineHeight: $(this).scrollTop() > 0? "60px":"100px"}, {duration: 100, queue: false, easing: "linear"});
    $under.animate({height: $(this).scrollTop() > 0? "60px":"100px"}, {duration: 100, queue: false, easing: "linear"});
    $navc.animate({opacity: $(this).scrollTop() > 0? "1":"0"}, {duration: 0, queue: false, easing: "linear"});
    $line.animate({marginTop: $(this).scrollTop() > 0? "-22px":"-42px"}, {duration: 0, queue: false, easing: "linear"});
  });

  //floating containers upwards and inwards on scroll
  $(function(){
    $(document).scroll(function(){
        var $scroll = $(this).scrollTop();
        var $goff = $('#graphic').offset();
        var $graphic = $('#graphic');
        if($scroll >= $goff.top - 400) {
            $graphic.css("marginLeft","720px");
            $graphic.css("marginTop", "-40px");
        } else {
            $graphic.css("marginLeft","750px");
            $graphic.css("marginTop", "-10px");
        }
    });
  });

  // animating divide in about section on appearance (setting to full width of 100px)

  // offsetting code intro wrapper on scroll
  $(function(){
    $(document).scroll(function(){
        var $scroll = $(this).scrollTop();
        var $doff = $('#dev-wrapper').offset();
        var $dev = $('#dev-wrapper');
        if($scroll >= $doff.top - 500) {
            $dev.css("marginLeft","80px");
            $dev.css("marginTop", "-170px");
        } else {
            $dev.css("marginLeft","60px");
            $dev.css("marginTop", "-130px");
        }
    });
  });

  // offsetting fine art intro wrapper on scroll
  $(function(){
    $(document).scroll(function(){
        var $scroll = $(this).scrollTop();
        var $foff = $('#fine-wrapper').offset();
        var $fine = $('#fine-wrapper');
        if($scroll >= 1500) {
            $dev.css("marginLeft","520px");
            $dev.css("marginTop", "-230px");
        } else {
            $dev.css("marginLeft","550px");
            $dev.css("marginTop", "-200px");
        }
    });
  });

  //making fixed disappear after certain scroll
  $(document).scroll(function() {
    var $fix = $('.fix');
    $fix.animate({opacity: $(this).scrollTop() > 1000? "0":"1"}, {duration: 50, queue: false, easing: "linear"});
  });

  //menu on toggle
  $('#nav-menu').click(function() {
    $('.menu').animate({marginLeft: "0vw"}, {duration: 50, queue: false, easing: "linear"});
    $('.divider').animate({width: "80%"}, {duration: 600, queue: false, easing: "linear"});
    $('.hider').addClass('showhider');
    $('.hider').animate({marginLeft: "0vw"}, {duration: 00, queue: false, easing: "linear"});
    $('.hider').animate({opacity: ".4"}, {duration: 500, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "30vw"}, {duration: 400, queue: false, easing: "linear"});
  });
  //menu off toggle
  $(document).mouseup(function (e)
    {
    var container = $(".menu");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.animate({marginLeft: -$width}, {duration: 50, queue: false, easing: "linear"});
        $('.divider').animate({width: "0px"}, {duration: 600, queue: false, easing: "linear"});
        $('.hider').removeClass('showhider');
        $('.hider').animate({marginLeft: "-100vw"}, {duration: 00, queue: false, easing: "linear"});
        $('.wrapper').animate({marginLeft: "0px"}, {duration: 400, queue: false, easing: "linear"});
    }
  });

  //setting margin-left of menu based on width of menu div
   $('.menu').css('margin-left',-$width);

  //on and off toggle of design section
  $('#graphic, #graphicmenu').click(function() {
    $('#graphicpop').animate({left: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "-100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('#graphiccloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
    $('.menu').animate({marginLeft: -$width}, {duration: 50, queue: false, easing: "linear"});
    $('.divider').animate({width: "0px"}, {duration: 600, queue: false, easing: "linear"});
  });
  $('#graphiccloser').click(function() {
    $('#graphiccloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#graphicpop').animate({left: "100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "0px"}, {duration: 400, queue: false, easing: "linear"});
  });

  //on and off toggle of code section
  $('#dev-wrapper, #codemenu').click(function() {
    $('#codepop').animate({left: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "-100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('#codecloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
    $('.menu').animate({marginLeft: -$width}, {duration: 50, queue: false, easing: "linear"});
    $('.divider').animate({width: "0px"}, {duration: 600, queue: false, easing: "linear"});
  });
  $('#codecloser').click(function() {
    $('#codecloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#codepop').animate({left: "100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "0px"}, {duration: 400, queue: false, easing: "linear"});
  });

  //on and off toggle of art section
  $('#fine-wrapper, #artmenu').click(function() {
    $('#artpop').animate({left: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "-100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('#artcloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
    $('.menu').animate({marginLeft: -$width}, {duration: 50, queue: false, easing: "linear"});
    $('.divider').animate({width: "0px"}, {duration: 600, queue: false, easing: "linear"});
  });
  $('#artcloser').click(function() {
    $('#artcloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#artpop').animate({left: "100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "0px"}, {duration: 400, queue: false, easing: "linear"});
  });

  //on and off toggle of about section
  $('#nav-about, #aboutme, #aboutmenu, .color-box').click(function() {
    $('#aboutpop').animate({left: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "-100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('#aboutcloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
    $('.menu').animate({marginLeft: -$width}, {duration: 50, queue: false, easing: "linear"});
    $('.divider').animate({width: "0px"}, {duration: 600, queue: false, easing: "linear"});
    $('.divide').animate({width: "100px"}, {duration: 700, queue: false, easing: "linear"});
  });
  $('#aboutcloser').click(function() {
    $('#aboutcloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#aboutpop').animate({left: "100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('.divide').animate({width: "0px"}, {duration: 700, queue: false, easing: "linear"});
  });

  //on and off toggle of feaster design section
  $('.feasterwork').click(function() {
    $('#graphiccloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#feasterpop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.graphicgoback').click(function() {
    $('#feasterpop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    // $('#graphiccloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of berkeley buildings section
  $('.buildingswork').click(function() {
    $('#graphiccloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#buildingspop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.graphicgoback').click(function() {
    $('#buildingspop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#graphiccloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of graphic design section
  $('.gdwork').click(function() {
    $('#graphiccloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#gdpop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.graphicgoback').click(function() {
    $('#gdpop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#graphiccloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of innod section
  $('.innowork').click(function() {
    $('#graphiccloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#innopop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.graphicgoback').click(function() {
    $('#innopop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#graphiccloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of weatherornot section
  $('.weatherwork').click(function() {
    $('#graphiccloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#weatherpop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.graphicgoback').click(function() {
    $('#weatherpop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#graphiccloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of personal branding section
  $('.personalwork').click(function() {
    $('#graphiccloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#personalpop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.graphicgoback').click(function() {
    $('#personalpop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#graphiccloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of weatherornot code section
  $('.weathercodework').click(function() {
    $('#codecloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#weathercodepop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.codegoback').click(function() {
    $('#weathercodepop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#codecloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of feaster code section
  $('.feastercodework').click(function() {
    $('#codecloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#feastercodepop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.codegoback').click(function() {
    $('#feastercodepop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#codecloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of personal site code section
  $('.personalcodework').click(function() {
    $('#codecloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#personalcodepop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.codegoback').click(function() {
    $('#personalcodepop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#codecloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of alice in wonderland section
  $('.alicework').click(function() {
    $('#artcloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#alicepop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.artgoback').click(function() {
    $('#alicepop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#artcloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of interconnected section
  $('.interconnectedwork').click(function() {
    $('#artcloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#interconnectedpop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.artgoback').click(function() {
    $('#interconnectedpop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#artcloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of wooden section
  $('.woodenwork').click(function() {
    $('#artcloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#woodenpop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.artgoback').click(function() {
    $('#woodenpop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#artcloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

  //on and off toggle of robots section
  $('.robotswork').click(function() {
    $('#artcloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#robotspop').animate({top: "0px"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "100vh"}, {duration: 100, queue: false, easing: "linear"});
  });
  $('.artgoback').click(function() {
    $('#robotspop').animate({top: "100vh"}, {duration: 300, queue: false, easing: "linear"});
    $('.sectionwrap').animate({top: "0px"}, {duration: 400, queue: false, easing: "linear"});
    $('#artcloser').animate({top: "3vh"}, {duration: 200, queue: true, easing: "linear"});
  });

});
