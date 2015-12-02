$(document).ready(function() {

  //$(“#title-container”).waypoints(function(direction) {
      //var position =  $(window).scrollTop();
      //if (position == 10) {
          //$(“#logo”).addClass(“sticky”);
      //} else {
          //$(“#logo”).removeClass(“sticky”);
      //}
  //});

  $("#email").click(function () {
    if ($('#popover1').hasClass('active')) {
        $('#popover1').removeClass('active');
    } else {
        $('#popver1').addClass('active');
    }
  });

  $(".button").click(function) {
      var number = $(this).attr('id').slice(-1);
      $("a" + number).show();
  });

  $("#title-container").click(function () {
      $("#logo").hide();
  });

  $(window).scroll(function () {
     var height = $(window).scrollTop();
     if (height == 200) {
       alert("hi");
       $("#logo").addClass("sticky");
     }
   });


});
