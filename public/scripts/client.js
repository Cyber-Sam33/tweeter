/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---


  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  function createTweetElement(tweetData) {
    const item = `
    <article class="tweet">
    <header>
      <span class="leftside-tweet">${tweetData.user.name}</span>
      <span class="rightside-tweet">${tweetData.user.handle}</span>
    </header>
    <div>${tweetData.content.text}</div>
    <footer>
        <span class="leftside-tweet">${tweetData.created_at}</span>
        <span class="rightside-tweet">
          <div>
            <span><i class="fa-regular fa-flag right-icons"></i></span>
            <span><i class="fa-sharp fa-solid fa-heart right-icons"></i></span>
            <span><i class="fa-solid fa-retweet right-icons"></i></span>
          </div>
        </span>
      </footer>
    </article>`;
    return item;
  }

  const renderTweets = function(tweetsArr) {
    // loops through tweets
    for (let tweetObj of tweetsArr) {
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      $('#all-tweets').append(createTweetElement(tweetObj));
    }
  };

  renderTweets(data);


  // Test / driver code (temporary)

  // createTweetElement($tweet);

  // TWEET DATA below from the 'initial-tweets.json file in data - for testing purposes:

  // const tweetDataOBject = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png",
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1675020595203
  // };

  // const $tweet = createTweetElement(tweetDataOBject);

  // $('#all-tweets').append($tweet);

});

