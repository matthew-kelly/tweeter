$(document).ready(function () {
  // toggle showing new tweet section
  $("button.nav-tweet-slider").on("click", function () {
    $("section.new-tweet").slideToggle("fast", function () {
      $("section.new-tweet form textarea").focus(); // focus on textarea automatically
    });
  })

  // toggle showing new tweet section on dropdown menu (small page width)
  $(".menu-list .nav-tweet-slider").on("click", function () {
    $("section.new-tweet").slideToggle("fast");
  })

  // toggle showing dropdown menu (small page width)
  $(".small-menu").on("click", function () {
    $(".menu-list").slideToggle(0);
    if ($("main.container").hasClass("open-menu")) {
      $("main.container").removeClass("open-menu");
    } else {
      $("main.container").addClass("open-menu");
    }
  })

  // close dropdown menu when window is readjusted to full size
  $(window).resize(function () {
    if ($(window).innerWidth > "600px") {
      $(".menu-list").slideUp(0);
      $("main.container").removeClass("open-menu");
    }
  })
  $(".menu-list").slideUp(0)
});