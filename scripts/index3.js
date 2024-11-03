document.addEventListener('DOMContentLoaded', function() {
    // Initialize Video.js player
    
    function setupVideoPlayer(videoId, pauseButtonClass) {
        var player = videojs(videoId);
        var pauseButton = document.querySelector(`#${videoId} ~ .${pauseButtonClass}`);
        var hidePauseButtonTimeout;
        var videoIndex = 0;
        var videoElement = document.getElementById(videoId);
        var videos = JSON.parse(videoElement.getAttribute('data-videos'));

        // Function to hide the pause button after 2 seconds
        function hidePauseButton() {
            hidePauseButtonTimeout = setTimeout(function() {
                pauseButton.style.display = 'none';
            }, 2000);
        }

        // Show the pause button when the video is playing
        player.on('play', function() {
            if (!player.ended()) {
                pauseButton.style.display = 'block';
                hidePauseButton();
            }
        });

        // Hide the pause button when the video is paused
        player.on('pause', function() {
            pauseButton.style.display = 'none';
            clearTimeout(hidePauseButtonTimeout);
        });

        // Ensure the pause button is hidden initially
        if (player.paused()) {
            pauseButton.style.display = 'none';
        }

        // Pause the video when the pause button is clicked
        pauseButton.addEventListener('click', function() {
            player.pause();
            pauseButton.style.display = 'none';
        });

        // Show the pause button when hovering over the video
        player.on('mouseover', function() {
            if (!player.paused() && !player.ended()) {
                pauseButton.style.display = 'block';
                clearTimeout(hidePauseButtonTimeout);
            }
        });

        // Hide the pause button when not hovering over the video
        player.on('mouseout', function() {
            if (!player.paused() && !player.ended()) {
                hidePauseButton();
            }
        });

        // Hide the pause button when the video ends
        player.on('ended', function() {
            pauseButton.style.display = 'none';
            clearTimeout(hidePauseButtonTimeout);

            // Load the next video
            if (videoIndex < videos.length - 1) {
                videoIndex++;
                player.src({ type: 'video/mp4', src: videos[videoIndex] });
                player.load();  // Ensure the player loads the new video without playing it
                player.one('loadeddata', function() {
                    // Ensure the video doesn't start playing automatically
                    player.pause();
                    player.muted(true);  // Mute each video
                });
            }
        });

        // Ensure the pause button is shown when the play button is clicked
        player.on('play', function() {
            pauseButton.style.display = 'block';
            hidePauseButton();
        });

        // Automatically play and mute the first video
        if (videoIndex === 0) {
            player.play();
            player.muted(true);
        }
    }

    setupVideoPlayer('my-video', 'vjs-big-pause-button');
  });
  
  
