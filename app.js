const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});
