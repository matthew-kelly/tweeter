$(document).ready(function () {

  $("form").submit(function (event) {
    event.preventDefault();
    let $form = $(this);
    let $tweetText = $form.children("textarea");
    if ($tweetText.val().length === 0) {
      alert("Tweet area is empty!");
      return false;
    } else if ($tweetText.val().length > 140) {
      alert("Tweet cannot be longer than 140 characters!");
      return false;
    }
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize(),
      success: function () {
        $tweetText.val("");
        $("#tweets-section").empty();
        loadTweets();
      }
    });
  });

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
    //     ICONS
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
        url: "/tweets",
        dataType: "json",
        success: function (tweets) {
          renderTweets(tweets);
        }
      })
  }

  loadTweets();
});