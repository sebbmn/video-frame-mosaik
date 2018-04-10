let i = 0;
let video = document.getElementById("video");
let thumbnailsMosaik = document.getElementById("thumbnails");

video.addEventListener('timeupdate', function() {
  addThumbnail();
}, false);

function addThumbnail() {
  let thumbnailCanvas = document.createElement("canvas");
  thumbnailCanvas.width = 90;
  thumbnailCanvas.height = 90;
  thumbnailCanvas.className = "thumbnail";

  let context = thumbnailCanvas.getContext("2d");
  context.drawImage(video,0,0,90,90);
  thumbnailsMosaik.appendChild(thumbnailCanvas);

  console.log('ok');
}
