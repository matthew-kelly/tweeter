$(document).ready(function () {

  function renderTweets(tweets) {
    tweets.forEach(function (tweet) {
      $("#tweets-section").prepend(createTweetElement(tweet));
    })
  };

  function createTweetElement(tweetObj) {
    // ARTICLE
    let $tweet = $("<article>", {
      "class": "tweet"
    });
    $tweet.append($("<p>").text(tweetObj.content.text));

    // HEADER
    let $header = $("<header>");
    $header.append($("<img>").attr("src", tweetObj.user.avatars.small));
    $header.append($("<h2>").text(tweetObj.user.name));
    $header.append($("<p>").text(tweetObj.user.handle));
    $header.prependTo($tweet);

    // FOOTER
    let $footer = $("<footer>");
    $footer.append($("<p>").text(moment(tweetObj.created_at).fromNow()));
    // - ICONS
    let $icons = $("<div class='icons invisible'></div>")
    $icons.append($("<i>", {
      "class": "fab fa-font-awesome-flag"
    }));
    $icons.append($("<i>", {
      "class": "fas fa-retweet"
    }));
    $icons.append($("<i>", {
      "class": "fas fa-heart"
    }));
    $icons.appendTo($footer);
    $footer.appendTo($tweet);

    return $tweet;
  }

  function loadTweets() {
    $.ajax({
      method: "GET",
      url: "/tweets/",
      dataType: "json",
      success: function (tweets) {
        $(".loading").slideUp(0);
        renderTweets(tweets);
      },
      error: function (event, err) {
        console.log(err)
        return;
      }
    })
  }

  // on new tweet submit
  $(".submit").click(function (event) {
    event.preventDefault();
    $(".error-message").slideUp(0); // clear previous error message
    let $tweetText = $(this).siblings("textarea");
    if ($tweetText.val().length === 0) { // check for tweet errors
      $(".error-message").text("Tweet area is empty!").slideDown(0);
      return false;
    } else if ($tweetText.val().length > 140) {
      $(".error-message").text("Tweet cannot be longer than 140 characters!").slideDown(0);
      return false;
    }
    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: $("form").serialize(),
      success: function () {
        $(".error-message").slideUp(0); // clear error message
        $tweetText.val(""); // clear tweet textarea
        $("#tweets-section").empty(); // clear old tweets
        $(".loading").slideDown(0); // show loading gif
        $(".new-tweet form .counter").text(140); // reset tweet length counter
        loadTweets();
      },
      error: function (event, err) {
        console.log(err)
        return;
      }
    });
  });

  loadTweets(); // populate page with tweets on initial load
});