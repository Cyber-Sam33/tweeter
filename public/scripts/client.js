/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  const createTweetElement = function(tweetData) {
    console.log(moment(new Date()).fromNow());
    // const timeAgo = new timeAgo('en-US');
    const item = `
    <article class="tweet">
    <header>
      <img src="${tweetData.user.avatars}" class="leftside-tweet"></img>
      <span class="leftside-tweet">${tweetData.user.name}</span>
      <span class="rightside-tweet">${tweetData.user.handle}</span>
    </header>
    <div>${escape(tweetData.content.text)}</div>
    <footer>
        <span class="leftside-tweet">${moment(new Date(tweetData.created_at)).fromNow()}</span>
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
  };

  const renderTweets = function(tweetsArr) {
    // loops through tweets
    for (let tweetObj of tweetsArr) {
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      $('#all-tweets').append(createTweetElement(tweetObj));
    }
  };

  $('#search').on('submit', function(event) {

    event.preventDefault();
    const tweet = $("#tweet-text").val();
    console.log(tweet);
    console.log($(this).serialize());
    //if for empty or 140 characters exceeded
    if (tweet === "" || tweet === null || tweet.length > 140) {

      return $('#error-message').slideDown('slow');
    }

    $.post("/tweets", $(this).serialize(), function(data) {
      console.log("tweet successfully posted!");
      loadTweets();
      $('#tweet-text').val('');
    });
  });

  const loadTweets = function() {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      type: 'get',
      success: function(data) {
        $('#all-tweets').empty();
        renderTweets(data);
      }
    });
  };

  loadTweets();
});

