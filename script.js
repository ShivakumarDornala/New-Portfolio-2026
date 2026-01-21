// HAMBURGER MENU
const dropdown = document.querySelector(".dropdown-menu");
function onToggleMenu(e) {
  e.name = e.name == "menu" ? "close" : "menu";
  dropdown.classList.toggle("top-16");
}
