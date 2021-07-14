const anchors = document.querySelectorAll("a");
const PageSlider = document.querySelector(".page__slider");

setTimeout(() => {
  PageSlider.classList.remove("is-ending");
}, 400);

for (let i = 2; i < 5; i++) {
  const anchor = anchors[i];
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target.href;

    PageSlider.classList.add("is-active");

    let nav = document.querySelector(".navbar");
    let logo = document.querySelector(".logo-image");

    nav.classList.remove("scrolling-active");
    nav.style.height = "55px";
    logo.style.height = "50px";
    logo.style.margin = " 5px 0 0 0 ";

    PageSlider.addEventListener("animationend", function () {
      window.location.href = target;
    }, false);
  });
}
