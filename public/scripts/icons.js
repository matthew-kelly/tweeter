$(document).ready(function () {
  $("#tweets-section .tweet").hover(function () {
    $(this).addClass("active");
  }, function () {
    $(this).removeClass("active");
  });

  $("#tweets-section .tweet").hover(function () {
    $("#tweets-section .tweet.active footer div.icons").removeClass("invisible").addClass("visible");
  }, function () {
    $("#tweets-section .tweet footer div.icons").removeClass("visible").addClass("invisible");
  });
});