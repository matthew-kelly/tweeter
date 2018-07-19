$(document).ready(function () {
  $("button.nav-tweet-slider").on("click", function () {
    $("section.new-tweet").slideToggle("fast", function () {
      $("section.new-tweet form textarea").focus();
    });
  })

  $(".menu-list .nav-tweet-slider").on("click", function () {
    $("section.new-tweet").slideToggle("fast");
  })

  $(".small-menu").on("click", function () {
    $(".menu-list").slideToggle(0);
    if ($("main.container").hasClass("open-menu")) {
      $("main.container").removeClass("open-menu");
    } else {
      $("main.container").addClass("open-menu");
    }
  })

  $(window).resize(function () {
    if ($(window).innerWidth > "600px") {
      $(".menu-list").slideUp(0);
      $("section.new-tweet").slideUp(0);
      $("main.container").removeClass("open-menu");
    }
  })
  $(".menu-list").slideUp(0)
});