function smoothScroll(target) {
  const element = document.getElementById(target);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

const navigationLinks = document.querySelectorAll("#navbar a[data-scroll]");
navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("data-scroll");
    smoothScroll(target);
  });
});

const video = document.getElementById("bg-video");
let reversePlayback = false;

video.addEventListener("timeupdate", function () {
  if (this.currentTime >= this.duration - 0.1) {
    reversePlayback = true;
    this.currentTime = this.duration - 0.1;
    this.playbackRate = -1;
  } else if (this.currentTime <= 0) {
    reversePlayback = false;
    this.currentTime = 0.1;
    this.playbackRate = 1;
  }

  if (!this.paused) {
    this.play();
  }
});

video.addEventListener("ended", function () {
  this.currentTime = reversePlayback ? this.duration - 0.1 : 0.1;
  this.playbackRate = reversePlayback ? -1 : 1;
  this.play();
});
