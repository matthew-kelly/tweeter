$(document).ready(function () {
  $("#tweets-section").on("mouseenter", "article.tweet", function () {
    $(this).addClass("active");
  });
  $("#tweets-section").on("mouseleave", "article.tweet", function () {
    $(this).removeClass("active");
  });

  $("#tweets-section").on("mouseenter", "article.tweet", function () {
    $("#tweets-section .tweet.active footer div.icons").removeClass("invisible").addClass("visible");
  });
  $("#tweets-section").on("mouseleave", "article.tweet", function () {
    $("#tweets-section .tweet footer div.icons").removeClass("visible").addClass("invisible");
  });
});