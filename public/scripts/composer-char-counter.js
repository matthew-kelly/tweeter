$(document).ready(function () {

  // text characters
  $(".new-tweet form textarea").on("keypress", function () {
    changeCounter(1);
  })
  // delete
  $(".new-tweet form textarea").on("keydown", function () {
    changeCounter(0);
  })

  function changeCounter(modifier) {
    const tweetTextArea = $(".new-tweet form textarea").val();
    const charCounter = $(".new-tweet form textarea").siblings(".counter");
    if (event.key === "Backspace" && tweetTextArea.length > 0) {
      charCounter.text(140 - tweetTextArea.length + 1);
    } else {
      charCounter.text(140 - tweetTextArea.length - modifier);
    }
    charLength(tweetTextArea.length);
  }

  function charLength(length) {
    const charCounter = $(".new-tweet form textarea").siblings(".counter");
    if (length < 140) {
      charCounter.removeClass("overCharLength");
    } else {
      charCounter.addClass("overCharLength");
    }
  }

  // original code
  // $(".new-tweet form textarea").on("keypress", function () {
  //   const tweetTextArea = $(this).val();
  //   const charCounter = $(this).siblings(".counter");
  //   charCounter.text(140 - tweetTextArea.length - 1);
  //   if (tweetTextArea.length >= 140) {
  //     charCounter.addClass("overCharLength");
  //   } else {
  //     charCounter.removeClass("overCharLength");
  //   }
  // })

  // // update counter for backspace
  // $(".new-tweet form textarea").on("keydown", function (event) {
  //   const tweetTextArea = $(this).val();
  //   const charCounter = $(this).siblings(".counter");
  //   if (event.key === "Backspace" && tweetTextArea.length > 0) {
  //     charCounter.text(140 - tweetTextArea.length + 1);
  //   }
  //   if (tweetTextArea.length <= 141) {
  //     charCounter.removeClass("overCharLength");
  //   } else {
  //     charCounter.addClass("overCharLength");
  //   }
  // })
});