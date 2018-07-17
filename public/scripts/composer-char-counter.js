$(document).ready(function () {
  $(".new-tweet form textarea").on("keypress", function () {
    const tweetTextArea = $(this).val();
    const charCounter = $(this).siblings(".counter");
    charCounter.text(139 - tweetTextArea.length);
    if (tweetTextArea.length >= 140) {
      charCounter.addClass("overCharLength");
    } else {
      charCounter.removeClass("overCharLength");
    }
  })

  // update counter for backspace
  $(".new-tweet form textarea").on("keydown", function (event) {
    const tweetTextArea = $(this).val();
    const charCounter = $(this).siblings(".counter");
    if (event.key === "Backspace" && tweetTextArea.length > 0) {
      charCounter.text(140 - tweetTextArea.length + 1);
    }
    if (tweetTextArea.length <= 141) {
      charCounter.removeClass("overCharLength");
    } else {
      charCounter.addClass("overCharLength");
    }
  })
});