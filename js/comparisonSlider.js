//slide on comparison slider

var slide = document.getElementById("slide");
var posX=0;

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
      SliderSection.addEventListener("touchmove", (t)=> {
        // var posX = t.touches[0].clientX;
        var posX2 = t.touches[0].clientX;
        console.log(posX2);
        slide.style.width = posX2 + "px";
      })
    });
  })
  .setClassToggle(".slider", "sidebox-animLeft")
  .reverse(false)
  .addTo(controller);

//comparison slider state

var inside = false;
var SliderSection = document.getElementById("slider__section");
SliderSection.addEventListener("mouseenter", function () {
  inside = true;
});

SliderSection.addEventListener("mouseleave", function () {
  inside = false;
});
