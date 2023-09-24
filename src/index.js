// import { BaseComponent } from "./components/basecomponent.js";

// const playerZone = new BaseComponent({
//   parent: document.body,
//   elementClass: "player-zone",
// });
// const video = new BaseComponent({
//   tag: "video",
//   parent: playerZone.getNode(),
//   elementClass: "video",
// });

// video.setAttribute("controls");
// video.setAttribute("width", "80%");
// video.setAttribute("src", "../assets/vidos.mp4");

const video = document.querySelector(".video");
const volumeSlider = document.querySelector(".volume");
const progressBar = document.querySelector(".progress");
const resumeButton = document.querySelector(".resume-button");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    resumeButton.style.display = "none";
  } else {
    video.pause();
    resumeButton.style.display = "block";
  }
}

resumeButton.addEventListener("click", togglePlayPause);
video.addEventListener("click", togglePlayPause);

volumeSlider.addEventListener("input", function () {
  video.volume = this.value;
});

video.addEventListener("timeupdate", function () {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
  if (video.currentTime === video.duration) {
    resumeButton.style.display = "block";
  }
});

function seekVideo(event) {
  const seekTime = (event.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = seekTime;
}

progressBar.addEventListener("click", seekVideo);
