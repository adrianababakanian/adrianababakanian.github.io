$(document).ready(function() {

  //$(“#title-container”).waypoints(function(direction) {
      //var position =  $(window).scrollTop();
      //if (position == 10) {
          //$(“#logo”).addClass(“sticky”);
      //} else {
          //$(“#logo”).removeClass(“sticky”);
      //}
  //});

  $("#title-container").click(function () {
      $("#logo").hide();
  })

  $(window).scroll(function () {
     var height = $(window).scrollTop();
     if (height == 200) {
       alert("hi");
       $("#logo").addClass("sticky");
       //$(“#logo”).addClass(“sticky”);
     // or do whatever you want here
     }
});


});
