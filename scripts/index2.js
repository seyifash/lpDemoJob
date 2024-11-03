/*$(document).ready(function() {
  // Reusable function to initialize video controls
  function initializeVideoControls(video, playButton, pauseButton) {
      video.onplaying = function() {
          console.log('Video is playing');
          playButton.css('display', 'none');

          video.onmouseover = function() {
              if (!video.paused) {
                  pauseButton.css('display', 'flex');
              }
          };

          video.onmouseout = function() {
              pauseButton.css('display', 'none');
          };
      };

      video.onended = function() {
          console.log('Video has ended');
          playButton.css('display', 'flex');
          pauseButton.css('display', 'none');
      };

      pauseButton.on('click', function() {
          video.pause();
          pauseButton.css('display', 'none');
          playButton.css('display', 'flex');
      });

      playButton.on('click', function() {
          video.play();
          playButton.css('display', 'none');
          pauseButton.css('display', 'flex');
      });
  }

  let videoContainer = $('.video-container');
  let videoElement = videoContainer.find('video').get(0);
  let videoElement = $('video').get(0);
  let playButton = $('#custom-play-button');
  let pauseButton = $('#custom-pause-button');

  // Initialize video controls
  initializeVideoControls(videoElement, playButton, pauseButton);
});
*/

document.addEventListener("DOMContentLoaded", function() {
  let videoContainer = document.querySelector('.video-container');
  let video = videoContainer.querySelector('video');
  var pauseButton = document.querySelector('.vjs-big-pause-button2');
  var playButton = document.querySelector('.section-6 .video-js .vjs-big-play-button');

  // Autoplay and mute the video on load
  video.autoplay = true;
  video.muted = true;

  // Function to hide the pause button after 2 seconds
  var hidePauseButtonTimeout;
  function hidePauseButton() {
      hidePauseButtonTimeout = setTimeout(function() {
          pauseButton.style.display = 'none';
      }, 2000);
  }

  // Show the pause button when the video is playing
  video.addEventListener('play', function() {
      pauseButton.style.display = 'block';
      hidePauseButton();
      playButton.style.display = 'none'; // Hide the big play button
  });

  // Show the big play button when the video is paused
  video.addEventListener('pause', function() {
      playButton.style.display = 'block';
  });

  // Hide the pause button when the video is paused
  video.addEventListener('pause', function() {
      pauseButton.style.display = 'none';
      clearTimeout(hidePauseButtonTimeout);
  });

  // Hide the pause button when the video ends
  video.addEventListener('ended', function() {
      pauseButton.style.display = 'none';
      clearTimeout(hidePauseButtonTimeout);
  });

  // Show the pause button when hovering over the video
  video.addEventListener('mouseover', function() {
      if (!video.paused && !video.ended) {
          pauseButton.style.display = 'block';
          clearTimeout(hidePauseButtonTimeout);
      }
  });

  // Hide the pause button when not hovering over the video
  video.addEventListener('mouseout', function() {
      if (!video.paused && !video.ended) {
          hidePauseButton();
      }
  });

  // Pause the video when the big play button is clicked
  playButton.addEventListener('click', function() {
      video.play();
      playButton.style.display = 'none'; // Hide the big play button again
  });

  pauseButton.addEventListener('click', function() {
    video.pause();
    pauseButton.style.display = 'none'; // Hide the big play button again
});


let chatBox = document.querySelector('.chat-box');
let railyText = chatBox.querySelector('h6');
console.log(chatBox);
if (chatBox) {
  let railyText = chatBox.querySelector('h6');
  
  if (railyText) {
      console.log(railyText);
      console.log(chatBox);

      railyText.addEventListener('click', function() {
          console.log('I am in here');
          chatBox.classList.toggle('showForm');
      });
  } else {
      console.error("The 'h6' element inside '.chat-box' was not found.");
  }
} else {
  console.error("The '.chat-box' element was not found.");
}
});


