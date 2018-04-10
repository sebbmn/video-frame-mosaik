let video = document.getElementById("video");
let thumbnailsMosaik = document.getElementById("thumbnails");

let isPlaying = false;
let maxTime = 0;

video.addEventListener('play', function() {
  isPlaying = true;
});
video.addEventListener('suspend', function() {
  isPlaying = false;
});
video.addEventListener('timeupdate', function() {

}, false);

window.setInterval(function() {
  if(isPlaying) {
    if(video.currentTime > maxTime) {
      maxTime = video.currentTime;
      addThumbnail(video.currentTime, 0);
    }
  }
}, 50);

function addThumbnail(currentTime, xStart) {
  let thumbnailCanvas = document.createElement("canvas");
  thumbnailCanvas.width = 48;
  thumbnailCanvas.height = 48;

  let context = thumbnailCanvas.getContext("2d");

  context.drawImage(video,xStart,0,400,400,0,0,48,48);
  dataUrl = thumbnailCanvas.toDataURL();
  thumbnailImage = document.createElement('img');
  thumbnailImage.src = dataUrl;
  thumbnailImage.className = "thumbnail";

  thumbnailImage.onclick = () => { 
    video.currentTime = currentTime; 
  };

  thumbnailsMosaik.appendChild(thumbnailImage);
}
