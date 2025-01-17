// $() <- targetting part
// .method < - Action
//methods (i 0r 2 parameters)

//Empty param => Read the value
//Set param => Set the value


//document.ready - this makes sure the script runs when the DOM is ready
$(document).ready(function() {
  // --- our code goes here ---

  // const textArea = document.querySelector('#tweet-text');
  const textArea = $('#tweet-text');
  //instead of event listener we have on
  textArea.on('input', (event) => {
    const counter = $('.counter');
    const currentCountValue = 140 - event.target.value.length;
    counter.val(currentCountValue);
    if (currentCountValue > 0 && currentCountValue < 140) {
      $('#error-message').slideUp('slow');
    }
    if (currentCountValue < 0) {
      counter.addClass('red-text');
    } else {
      counter.removeClass('red-text');
    }
  });
});

