// before and on load animations
$(".logo").hide();
$(".logo").fadeIn(200);
$(".wrapper").hide();
$(".wrapper").fadeIn(400);
$(".navbar").hide();
$(".wrapper__main").css("height", "0");

const wrapMain = document.querySelector(".wrapper__main");

window.onload = function () {
  var LoadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;

  console.log("Page load time is " + LoadTime);

  $(".loader").delay(500).fadeOut(600);
  $(".header-main").addClass("sidebox-anim");
  $(".navbar-container").delay(0).show();
  $(".navbar").delay(1200).fadeIn();

  $(".wrapper__main")
    .delay(1600)
    .queue(function (next) {
      $(this).css("height", "auto");

      //navbar about redirect delay if from other page
      if ( window.location.href.indexOf("about")>0 && wrapMain.style.height == "auto") {
        window.location.href = "./#about";
        console.log("erere");
      }
      next();
    });

  $(".list-container ul").delay(0).hide();
  $(".list-container").delay().hide();
  $(".list-container").delay(1500).slideDown("fast");
};

//listing under header h1

myLoop();

var c = document.getElementsByClassName("secondary");

var i = 0;

function myLoop() {
  setTimeout(function () {
    c[i].style.display = "block";
    c[i].style.opacity = 1;
    $(".list-container ul").delay(0).fadeIn(200);

    if (i > 0) {
      c[i - 1].style.display = "none";
    } else {
      c[4].style.display = "none";
    }
    $(".list-container ul").delay(1500).fadeOut(200);
    i++;
    if (i < 5) {
      myLoop();
    }
    if (i == 5) {
      i = 0;
      myLoop();
    }
  }, 2000);
}

//on scroll animations

//navbar
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar");
  let logo = document.querySelector(".logo-image");
  let WindowScroll = window.scrollY > 100;

  nav.classList.toggle("scrolling-active", WindowScroll);
  if (WindowScroll) {
    nav.style.height = "55px";
    logo.style.height = "50px";
    logo.style.margin = " 5px 0 0 0 ";
  } else {
    nav.style.height = "90px";
    logo.style.height = "80px";
    logo.style.margin = "0";
  }

  //header parallax
  let bck = document.querySelector("header");
  let BckPosition = 50 + window.scrollY / 10 + "%";

  bck.style.backgroundPositionY = BckPosition;
});

//other
var NextToShow = document.getElementsByClassName("show"); //used by logos & offer cards
var delay = 0;

var controller = new ScrollMagic.Controller();

//logos
var LogoScene = new ScrollMagic.Scene({
  triggerElement: ".toShow",
  offset: -170,
})
  .on("start", function fadeDelay() {
    for (let j = 0; j < 5; j++) {
      NextToShow[j].style.animationDelay = delay + "ms";
      delay = delay + 100;
    }
    delay = 0;
  })
  .setClassToggle(".toShow img", "show")
  .reverse(false)
  .addTo(controller);

//slide on fixed
var SlideScene = new ScrollMagic.Scene({
  triggerElement: ".toSlide",
  offset: -170,
})
  .setClassToggle(".toSlide div", "sidebox-animRight")
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

//slide on comparison slider

var slide = document.getElementById("slide");

var ComparisonScene = new ScrollMagic.Scene({
  triggerElement: ".slider__container",
  offset: -100,
})
  .on("start", function whenAnimEnd() {
    slide.addEventListener("animationend", function sliding() {
      slide.style.width = 50 + "%";
      window.addEventListener("mousemove", (e) => {
        if (inside == true) {
          let x = e.clientX;
          slide.style.width = x + "px";
        }
        if (inside == false) {
          slide.style.width = 50 + "%";
        }
      });
    });
  })
  .setClassToggle(".slider__container .slider-left", "sidebox-animLeft")
  .reverse(false)
  .addTo(controller);

//comparison slider state

var inside = false;
var SliderSection = document.getElementById("slider__section");
SliderSection.addEventListener("mouseenter", function () {
  // sliding();
  inside = true;
});

SliderSection.addEventListener("mouseleave", function () {
  // sliding();
  inside = false;
});


//buttons on offer cards direct to oferta.html

// var OfferButton = document.getElementsByClassName("card__button");
// for (let i = 0; i < 3; i++) {
//   OfferButton[i].addEventListener('click', function () {
//     window.location.href='./oferta.html'
//   })
// }