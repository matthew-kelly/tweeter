$(document).ready(function () {
  // tweet characters
  $(".new-tweet form textarea").on("keypress", function () {
    changeCounter(1);
  })
  // backspace key detection
  $(".new-tweet form textarea").on("keydown", function () {
    changeCounter(0);
  })

  function changeCounter(modifier) {
    const tweetTextArea = $(".new-tweet form textarea").val();
    const charCounter = $(".new-tweet form textarea").siblings(".counter");
    if (event.key === "Backspace" && tweetTextArea.length > 0) { // add 1 to remaining tweet length if backspace key is hit
      charCounter.text(140 - tweetTextArea.length + 1);
    } else {
      charCounter.text(140 - tweetTextArea.length - modifier); // subtract 1 from remaining tweet length
    }
    charLength(charCounter, charCounter.text()); // check if tweet is too long
  }

  function charLength(counter, length) {
    if (length >= 0) {
      counter.removeClass("overCharLength");
    } else {
      counter.addClass("overCharLength");
    }
  }
  
});