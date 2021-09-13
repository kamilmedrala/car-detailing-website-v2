window.addEventListener("DOMContentLoaded", () => {
  var header = document.querySelector("header");

  if (screen.width <= 600) {
    header.style.height = window.innerHeight + "px";
  }

  if (window.location.href.indexOf("about") > 0) {
    window.location.href = "./#about";
  }

  var list = document.getElementById("list");

  function listLoop() {
    list.firstElementChild.style.opacity = 1;

    setTimeout(function () {
      list.firstElementChild.style.opacity = 0;
    }, 1700);

    setTimeout(function () {
      list.appendChild(list.firstElementChild);
    }, 2000);
  }

  listLoop();

  setInterval(function () {
    listLoop();
  }, 2100);
});

window.addEventListener("scroll", () => {
  let nav = document.querySelector('[data-js="navbar"]');
  let logo = document.querySelector('[data-js="logo-image"]');
  let navelements = document.querySelectorAll("[data-js-navbar]");
  let WindowScroll = window.scrollY > 100;

  nav.classList.toggle("scrolling-active", WindowScroll);
  if (WindowScroll) {
    nav.style.transform = "translateY(-30px)";
    logo.style.transform = "scale(0.7)";
    navelements[0].style.transform = "translateY(15px)";
    navelements[1].style.transform = "translateY(15px)";
    navelements[2].style.transform = "translateY(15px)";
  } else {
    nav.style.transform = "translateY(0)";
    logo.style.transform = "scale(1)";
    navelements[0].style.transform = "translateY(0)";
    navelements[1].style.transform = "translateY(0)";
    navelements[2].style.transform = "translateY(0)";
  }

  const bck = document.querySelector('[data-js="header-bck"]');
  var BckPosition = window.scrollY / 20 + "%";

  bck.style.webkitTransform = "translateY(" + BckPosition + ")";
});

var NextToShow = document.getElementsByClassName("show");
var delay = 0;

var controller = new ScrollMagic.Controller();

var LogoScene = new ScrollMagic.Scene({
  triggerElement: "#logos",
  offset: -170,
})
  .on("start", function fadeDelay() {
    for (let j = 0; j < 5; j++) {
      NextToShow[j].style.animationDelay = delay + "ms";
      delay = delay + 100;
    }
    delay = 0;
  })
  .setClassToggle("#logos img", "show")
  .reverse(false)
  .addTo(controller);

var SlideScene = new ScrollMagic.Scene({
  triggerElement: "#gallery",
  offset: -50,
})
  .setClassToggle("#gallery #sidetext", "sidebox-animRight")
  .reverse(false)
  .addTo(controller);

var OfferScene = new ScrollMagic.Scene({
  triggerElement: "#offer",
  offset: -100,
})
  .on("start", function fadeDelay() {
    for (let j = 3; j < NextToShow.length; j++) {
      NextToShow[j].style.animationDelay = delay + "ms";
      delay = delay + 100;
    }
    delay = 0;
    j = 0;
  })
  .setClassToggle("#offer .card", "show")
  .reverse(false)
  .addTo(controller);
