$(document).ready(function () {
  // Fake data taken from tweets.json
  const sample = [{
      "user": {
        "name": "Newton",
        "avatars": {
          "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1531870007000
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1361113796368
    }
  ];

  $("form").submit(function (event) {
    event.preventDefault();
    let $form = $(this);
    let $tweetText = $form.children("textarea");
    if ($tweetText.val().length === 0) {
      return false;
    }
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $("form").serialize()
    });
    $tweetText.val("");
  });

  function renderTweets(tweets) {
    for (let i = 0; i < tweets.length; i++) {
      let newTweet = createTweetElement(tweets[i]);
      $("#tweets-section").append(newTweet);
    }
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

  renderTweets(sample);
});