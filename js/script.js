let video = document.getElementById("video");
let thumbnailsMosaik = document.getElementById("thumbnails");
let maxTime = 0;

video.addEventListener('timeupdate', function() {
  if(video.currentTime > maxTime) {
    maxTime = video.currentTime;
    addThumbnail(video.currentTime);
  }
}, false);

function addThumbnail(currentTime) {
  let thumbnailCanvas = document.createElement("canvas");
  thumbnailCanvas.width = 48;
  thumbnailCanvas.height = 48;
  thumbnailCanvas.id = currentTime;
  thumbnailCanvas.className = "thumbnail";
  thumbnailCanvas.onclick = () => { 
    video.currentTime = currentTime; 
  };

  let context = thumbnailCanvas.getContext("2d");
  context.drawImage(video,0,0,48,48);
  thumbnailsMosaik.appendChild(thumbnailCanvas);
}
