// Fetch the video data from the JSON file
fetch('videos.json')
  .then(response => response.json())
  .then(data => {
    // Populate video thumbnails and titles
    const videoListContainer = document.getElementById('videoList');

    data.videos.forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.classList.add('videoItem');

      const thumbnail = document.createElement('img');
      thumbnail.classList.add('videoThumbnail');
      thumbnail.src = video.thumbnail;

      const title = document.createElement('div');
      title.classList.add('videoTitle');
      title.textContent = video.title;

      videoItem.appendChild(thumbnail);
      videoItem.appendChild(title);

      videoItem.addEventListener('click', () => {
        openVideoPlayer(video);
      });

      videoListContainer.appendChild(videoItem);
    });
  })
  .catch(error => {
    console.error('Error fetching video data:', error);
  });

// Function to open the video player
function openVideoPlayer(video) {
  const videoPlayerContainer = document.getElementById('videoPlayerContainer');
  const videoPlayer = document.getElementById('videoPlayer');
  const closeButton = document.getElementById('closeButton');

  // Set the video source
  videoPlayer.src = video.videoUrl;

  // Display the video player
  videoPlayerContainer.style.display = 'block';

  // Close the video player on button click
  closeButton.addEventListener('click', () => {
    videoPlayerContainer.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  });
}
