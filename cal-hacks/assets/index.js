$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll > 66) {
      $(".header").addClass("lift");
  } else {
      $(".header").removeClass("lift");
  }
});

function toggleMobileNav() {
    var x = document.getElementById("mobile-nav");
    console.log('hello');
    if (x.className === "mobile-nav") {
        x.className += " show";
    } else {
        x.className = "mobile-nav";
    }
}
