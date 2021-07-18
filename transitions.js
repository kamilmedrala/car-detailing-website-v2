const anchors = document.querySelectorAll("a");
const PageSlider = document.querySelector(".page__slider");

PageSlider.addEventListener(
  "animationend",
  function () {
    PageSlider.classList.remove("is-ending");
  },
  false
);

for (let i = 2; i < anchors.length; i++) {
  const anchor = anchors[i];
  if (i != 5) {
    //to skip anchor for calling
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      PageSlider.classList.add("is-active");

      let nav = document.querySelector(".navbar");
      let logo = document.querySelector(".logo-image");
      let navelements = document.querySelectorAll("#navbar-element");

      nav.classList.remove("scrolling-active");
      nav.style.transform = "translateY(-30px)";
      logo.style.transform = "scale(0.7)";
      navelements[0].style.transform = "translateY(15px)";
      navelements[1].style.transform = "translateY(15px)";

      PageSlider.addEventListener(
        "animationend",
        function () {
          window.location.href = target;
        },
        false
      );
    });
  }
}
