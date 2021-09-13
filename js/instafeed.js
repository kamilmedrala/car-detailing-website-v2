const amount = 9;

$.ajax({
  url: "./data.json",
  type: "GET",
  dataType: "json",
  success: function (response) {
    let AccessToken = response.accessToken;
    getPosts(AccessToken);
  },
});

function afterLoad(callback) {
  callback();
}

function getPosts(token) {
  $.ajax({
    url: `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${token}`,
    type: "GET",
    crossDomain: true,
    dataType: "jsonp",
    success: function (response) {
      let post = response.data;
      for (let i = 0; i < amount; i++) {
        let PostElement = document.createElement("div");
        PostElement.className = "gallery__insta-image";
        PostElement.style.backgroundImage = "url" + "(" + post[i].media_url + ")";
        PostElement.innerHTML = "<p>" + post[i].caption + "</p>";
        document.querySelector('[data-js="gallery__insta-container"]').appendChild(PostElement);
        PostElement.addEventListener("click", function () {
          window.open("https://www.instagram.com/pro_shine_autodetailing/", "_blank");
        });
      }
      afterLoad(PostDelay);
    },
  });
}

var delay = 0;

function PostDelay() {
  var NextToShowIg = document.getElementsByClassName("gallery__insta-image");

  var controller = new ScrollMagic.Controller();

  console.log("loaded!");

  var InstaGalleryScene = new ScrollMagic.Scene({
    triggerElement: ".gallery__insta",
    offset: -50,
  })
    .on("start", function fadeDelay() {
      for (let j = 0; j < NextToShowIg.length; j++) {
        NextToShowIg[j].style.animationDelay = delay + "ms";
        delay = delay + 100;
      }
      delay = 0;
      j = 0;
    })
    .setClassToggle(".gallery__insta-image", "show")
    .reverse(false)
    .addTo(controller);
}
