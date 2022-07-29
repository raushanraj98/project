let navLinks = document.getElementById("navlinks");
let menu = document.getElementById("header__menu");
menu.addEventListener("click", showMenu);

function showMenu() {
  if (!navLinks.classList.contains("navlinks__transition__toggle")) {
    navLinks.classList.remove("navlinks__transition");
    navLinks.classList.add("navlinks__transition__toggle");
  } else {
    navLinks.classList.remove("navlinks__transition__toggle");
    navLinks.classList.add("navlinks__transition");
  }
}