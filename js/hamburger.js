var navlist = document.querySelector(".navbar ul");
var btn = document.querySelector('.btn');
var main = document.querySelector('main');
var footer = document.querySelector('footer');
var state = false

btn.addEventListener('click', function() {
  this.classList.toggle('active');
  this.classList.toggle('not-active');
  navlist.classList.toggle('hamburger-slide');
  state=!state;
  if(state){
    main.style.filter = "brightness(50%)";
    footer.style.filter = "brightness(50%)";
  }
  else{
    main.style.filter = "brightness(100%)";
    footer.style.filter = "brightness(100%)";

  }
});