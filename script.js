// HAMBURGER MENU
const hamMenu = document.querySelector(".ham-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

