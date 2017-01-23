$(document).ready(function() {

  //jQuery variable definition
  var $width = $('.menu').width();


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
  });
  $('#aboutcloser').click(function() {
    $('#aboutcloser').animate({top: "-60px"}, {duration: 200, queue: true, easing: "linear"});
    $('#aboutpop').animate({left: "100vw"}, {duration: 400, queue: false, easing: "linear"});
    $('.wrapper').animate({marginLeft: "0px"}, {duration: 400, queue: false, easing: "linear"});
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
