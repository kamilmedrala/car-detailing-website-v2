var images = document.getElementById("gallery-images");
var image = document.getElementsByClassName("gallery-image");
var rightBtn = document.getElementById("gallery__arrow-right");
var leftBtn = document.getElementById("gallery__arrow-left");
var selectedOrder = 1;
var ready = true;

var offset = 50;
if (screen.width <= 600) {
  offset = 100;
}
else{
  offset = 50;
}

images.addEventListener("transitionstart", () => {
  ready = false;
  setTimeout(function () {
    ready = true;
  }, 200);
});

images.addEventListener("transitionend", () => {
  images.style.transition = "none";
  images.style.left = 0;
  if (selectedOrder == 1) {
    images.appendChild(images.firstElementChild);
  }
  if (selectedOrder == -1) {
    images.prepend(images.lastElementChild);
  }
});

rightBtn.addEventListener("click", () => {
  if (ready) {
    if (selectedOrder == -1) {
      if (offset == 50) {
        images.prepend(image[2],image[3]);
      }
      else{
        images.prepend(image[3]);
      }
      selectedOrder = 1;
    }
    images.style.transition = "all 0.3s";
    images.style.justifyContent = "flex-start";
    images.style.left = -offset + "%";
  }
});

leftBtn.addEventListener("click", () => {
  if (ready) {
    if (selectedOrder == 1) {
      
      if (offset == 50) {
        images.append(image[0],image[1]);
      }
      else{
        images.append(image[0]);
      }
      selectedOrder = -1;
    }
    images.style.transition = "all 0.3s";
    images.style.justifyContent = "flex-end";
    images.style.left = offset + "%";
  }
});
