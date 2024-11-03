document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cards");
    const slideBar = document.querySelector(".slide-bar");
    const blurImage = document.querySelector(".blur");

    cards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
            // Calculate the new position based on the index
            const cardWidth = card.getBoundingClientRect().width;
            const newX = cardWidth * index;
            
            // Apply the transformation
            slideBar.style.transform = `translateX(${newX}px)`;
            blurImage.style.transform = `translateX(${newX}px)`;
        });
    });


    // fade in effect 
    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const elements = entry.target.querySelectorAll('.fade-in-element');
            if (entry.isIntersecting) {
                elements.forEach(el => el.classList.add('in-view'));
            } else {
                elements.forEach(el => el.classList.remove('in-view'));
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.map');
    sections.forEach(section => observer.observe(section));


    let videoContainer = document.querySelector('.video-container3');
    let video = videoContainer.querySelector('video');
    var pauseButton = document.querySelector('.vjs-big-pause-button3');
    var playButton = document.querySelector('.section-8 .video-js .vjs-big-play-button');

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
      console.log('i am here')
      hidePauseButton();
      playButton.style.display = 'none'; // Hide the big play button
  });

  // Show the big play button when the video is paused
  video.addEventListener('pause', function() {
    console.log('i am here 2')
      playButton.style.display = 'block';
  });

  // Hide the pause button when the video is paused
  video.addEventListener('pause', function() {
      pauseButton.style.display = 'none';
      console.log('i am here 3')
      clearTimeout(hidePauseButtonTimeout);
  });

  // Hide the pause button when the video ends
  video.addEventListener('ended', function() {
    console.log('i am here 4')
      pauseButton.style.display = 'none';
      clearTimeout(hidePauseButtonTimeout);
  });

  // Show the pause button when hovering over the video
  video.addEventListener('mouseover', function() {
      if (!video.paused && !video.ended) {
        console.log('i am here 5')
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
});