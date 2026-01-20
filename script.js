// HAMBURGER MENU
const hamMenu = document.querySelector(".ham-menu");
const dropdown = document.querySelector(".show-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  dropdown.classList.toggle("right-9");
});
