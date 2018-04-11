let video = document.getElementById("video");
let thumbnails = document.getElementById("thumbnails");

let hueVariation = 0;
let isPlaying = false;
let maxTime = 0;

video.addEventListener('play', function() {
  isPlaying = true;
});
video.addEventListener('pause', function() {
  isPlaying = false;
});

// 23fps = 1 frame every 43.478 sec
window.setInterval(function() {
  if(isPlaying) {
    if(video.currentTime > maxTime) {
      maxTime = video.currentTime;
      addThumbnail(video.currentTime);
    }
  }
}, 44); 

function addThumbnail(currentTime) {
  let thumbnailCanvas = document.createElement("canvas");
  thumbnailCanvas.width = 48;
  thumbnailCanvas.height = 48;

  let context = thumbnailCanvas.getContext("2d");
  context.filter = `hue-rotate(${hueVariation}deg)`;
  hueVariation +=1;
  context.drawImage(video,280,0,400,400,0,0,48,48);
  
  dataUrl = thumbnailCanvas.toDataURL();
  thumbnailImage = document.createElement('img');
  thumbnailImage.src = dataUrl;
  thumbnailImage.className = "thumbnail";
  thumbnailImage.id = currentTime;

  thumbnailImage.onclick = () => { 
    video.currentTime = currentTime; 
  };

  thumbnails.appendChild(thumbnailImage);
}
