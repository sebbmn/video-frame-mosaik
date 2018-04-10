let video = document.getElementById("video");
let thumbnailsMosaik = document.getElementById("thumbnails");

video.addEventListener('timeupdate', function() {
  let i = 0;
  addThumbnail(video.currentTime);
  i++;
}, false);

function addThumbnail(currentTime) {
  let thumbnailCanvas = document.createElement("canvas");
  thumbnailCanvas.width = 96;
  thumbnailCanvas.height = 96;
  thumbnailCanvas.id = currentTime;
  thumbnailCanvas.className = "thumbnail";
  thumbnailCanvas.onclick = () => { 
    video.currentTime = currentTime; 
  };

  let context = thumbnailCanvas.getContext("2d");
  context.drawImage(video,0,0,96,96);
  thumbnailsMosaik.appendChild(thumbnailCanvas);

  console.log(currentTime);
}
