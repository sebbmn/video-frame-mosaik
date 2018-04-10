let video = document.getElementById("video");
let thumbnailsMosaik = document.getElementById("thumbnails");

video.addEventListener('timeupdate', function() {
  let i = 0;
  addThumbnail(video.currentTime);
  i++;
}, false);

function addThumbnail(currentTime) {
  let thumbnailCanvas = document.createElement("canvas");
  thumbnailCanvas.width = 90;
  thumbnailCanvas.height = 90;
  thumbnailCanvas.id = currentTime;
  thumbnailCanvas = toVideoTime(currentTime);
  thumbnailCanvas.className = "thumbnail";

  let context = thumbnailCanvas.getContext("2d");
  context.drawImage(video,0,0,90,90);
  thumbnailsMosaik.appendChild(thumbnailCanvas);

  console.log(currentTime);
}
