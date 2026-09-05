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

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 0) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) * 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) * 50;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}

startLoader();
