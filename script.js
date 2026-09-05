function onToggleMenu(menuIcon) {
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (!dropdownMenu) {
    return;
  }

  dropdownMenu.classList.toggle("-top-full");
  dropdownMenu.classList.toggle("top-16");
  menuIcon.setAttribute(
    "name",
    dropdownMenu.classList.contains("-top-full") ? "menu" : "close",
  );
}
