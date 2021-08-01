// before and on load animations

$(".logo").hide();
$(".logo").fadeIn(200);
$(".wrapper").hide();
$(".wrapper").fadeIn(400);
$(".navbar").hide();

window.onload = function () {
  var LoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  var wrapMain = document.querySelector("main");
  var header = document.querySelector("header");

  if (screen.width <= 600) {
    header.style.height = window.innerHeight + "px";
  }

  console.log("Page load time is " + LoadTime);
  $(".loader").delay(500).fadeOut(600);
  $(".header-main").addClass("sidebox-anim");
  $(".navbar-container").delay(0).show();
  $(".navbar").delay(1200).fadeIn();

  $("main")
    .delay(1500)
    .queue(function (next) {
      $(this).css("height", "auto");
      $("footer").css("height", "50px");

      //navbar about redirect delay if from other page
      if (window.location.href.indexOf("about") > 0 && wrapMain.style.height == "auto") {
        window.location.href = "./#about";
      }
      next();
    });

  $(".list-container ul").delay(0).hide();
  $(".list-container").delay().hide();
  $(".list-container").delay(1500).slideDown("fast");
  myLoop();
};

//listing under header h1

var list = document.getElementById("list");
var i = 0;

function myLoop() {
  setInterval(function () {
    $("#list").delay(0).fadeIn(200);
    list.firstElementChild.style.opacity = 1;

    setTimeout(function () {
      list.firstElementChild.style.opacity = 0;
    }, 1700);

    setTimeout(function () {
      list.appendChild(list.firstElementChild);
    }, 2000),
      i++;
    if (i == 5) {
      i = 0;
    }
  }, 2100);
}

//on scroll animations

//navbar
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar");
  let logo = document.querySelector(".logo-image");
  let navelements = document.querySelectorAll("#navbar-element");
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

  //header parallax
  const bck = document.querySelector(".header-bck img");
  var BckPosition = window.scrollY / 20 + "%";

  // bck.style.transform = "translateY(" + BckPosition + ")";
  bck.style.webkitTransform = "translateY(" + BckPosition + ")";
});

//other
var NextToShow = document.getElementsByClassName("show"); //used by logos & offer cards
var delay = 0;

var controller = new ScrollMagic.Controller();

//logos
var LogoScene = new ScrollMagic.Scene({
  triggerElement: ".logos",
  offset: -170,
})
  .on("start", function fadeDelay() {
    for (let j = 0; j < 5; j++) {
      NextToShow[j].style.animationDelay = delay + "ms";
      delay = delay + 100;
    }
    delay = 0;
  })
  .setClassToggle(".logos img", "show")
  .reverse(false)
  .addTo(controller);

//slide on gallery

var SlideScene = new ScrollMagic.Scene({
  triggerElement: ".gallery",
  offset: -50,
})
  .setClassToggle(".gallery .sidetext", "sidebox-animRight")
  .reverse(false)
  .addTo(controller);

//offer
var OfferScene = new ScrollMagic.Scene({
  triggerElement: ".offer",
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
  .setClassToggle(".offer .card", "show")
  .reverse(false)
  .addTo(controller);
