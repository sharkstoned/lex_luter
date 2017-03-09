var toggle = document.querySelector(".burger");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--nojs")

toggle.addEventListener("click", function() {
  if (menu.classList.contains("main-nav--opened")) {
    menu.classList.remove("main-nav--opened");
    menu.classList.add("main-nav--closed");
}  else {
  menu.classList.add("main-nav--opened");
  menu.classList.remove("main-nav--closed");
}
});
toggle.addEventListener("click", function() {
  if (toggle.classList.contains("page-header__btn--closed")) {
    toggle.classList.remove("page-header__btn--closed");
  } else {
    toggle.classList.add("page-header__btn--closed");
  }
});
