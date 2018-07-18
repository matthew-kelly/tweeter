$(document).ready(function () {
  $("button.nav-tweet-slider").on("click", function () {
    $("section.new-tweet").slideToggle("fast", function() {
      $("section.new-tweet form textarea").focus();
    });
  })
});