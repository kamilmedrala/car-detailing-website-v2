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
      for (let i = 0; i < 6; i++) {
        let PostElement = document.createElement("div");
        PostElement.className = "gallery__insta-image show";
        PostElement.style.backgroundImage =
          "url" + "(" + post[i].media_url + ")";
        PostElement.innerHTML = "<p>" + post[i].caption + "</p>";
        document.getElementById("id_gallery__insta").appendChild(PostElement);
      }
    },
  });
}
var NextToShow = document.getElementsByClassName("show");
var delay = 0;

window.onload = function () {
    for (let i = 0; i < 6; i++) {
      NextToShow[i].style.animationDelay = delay + "ms";
      delay = delay + 50;
    }
    delay = 0; 
};
