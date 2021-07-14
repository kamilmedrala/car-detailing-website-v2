$.ajax({
  url: "./data.json",
  type: "GET",
  dataType: "json",
  success: function (response) {
    let AccessToken = response.accessToken;
    getPosts(AccessToken);
  },
});

function getPosts(token) {
  $.ajax({
    url: `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${token}`,
    type: "GET",
    crossDomain: true,
    dataType: "jsonp",
    success: function (response) {
      let post = response.data;
      // console.log(dane[0].caption);
      // console.log(dane[0].media_url);
      // zdjecia[0].media_url
      for (let i = 0; i < 6; i++) {
        let PostElement = document.createElement("div");
        PostElement.className = "gallery__insta-image";
        PostElement.style.backgroundImage =
          "url" + "(" + post[i].media_url + ")";
        PostElement.innerHTML = "<p>" + post[i].caption + "</p>";
        document.getElementById("id_gallery__insta").appendChild(PostElement);

        // let postElementCaption=document.createElement('p');
        // postElementCaption.className = "gallery__insta-caption";
        // let postElements = document.getElementsByClassName("gallery__insta-image")
        // postElements[i].appendChild(postElementCaption);
      }
    },
  });
}

window.onload = function () {
  var NextToShow = document.getElementsByClassName("gallery__insta-image"); //used by images
  var delay = 0;
  var j = 0;
  var controller = new ScrollMagic.Controller();

  //posts display animation
  var imageScene = new ScrollMagic.Scene({
    triggerElement: NextToShow,
  })
    .on("start", function fadeDelay() {
      for (j = 0; j < 6; j++) {
        NextToShow[j].style.animationDelay = delay + "ms";
        delay = delay + 50;
      }
      delay = 0;
      console.log("elelelle");
    })
    .setClassToggle(".gallery__insta-image", "show")
    .reverse(false)
    .addTo(controller);
};
