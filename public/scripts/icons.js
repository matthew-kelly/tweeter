$(document).ready(function () {
  $("#tweets-section .tweet").hover(function () {
    $("#tweets-section .tweet footer div.icons").css("visibility", "visible");
  }, function () {
    $("#tweets-section .tweet footer div.icons").css("visibility", "hidden");
  });
});