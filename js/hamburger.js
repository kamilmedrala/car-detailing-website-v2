var navlist = document.querySelector('[data-js-navbar="list"]');
var btn = document.querySelector(".btn");
var element = document.querySelectorAll('[data-js="anchor"]');
var main = document.querySelector("main");
var footer = document.querySelector("footer");
var state = false;

btn.addEventListener("click", function () {
  this.classList.toggle("active");
  this.classList.toggle("not-active");
  navlist.classList.toggle("hamburger-slide");
  if (navlist.classList.contains("hamburger-slide")) {
    main.style.filter = "brightness(50%)";
    footer.style.filter = "brightness(50%)";
  } else {
    main.style.filter = "brightness(100%)";
    footer.style.filter = "brightness(100%)";
  }
});

function hide() {
  navlist.classList.remove("hamburger-slide");
  btn.classList.remove("active");
  btn.classList.add("not-active");

  main.style.filter = "brightness(100%)";
  footer.style.filter = "brightness(100%)";
}

element[0].addEventListener("click", hide);
element[1].addEventListener("click", hide);
