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
  const counterElement = document.querySelector(".counter");

  if (!counterElement) {
    return;
  }

  let currentValue = 0;

  function updateCounter() {
    currentValue += Math.floor(Math.random() * 10) + 5;

    if (currentValue >= 100) {
      currentValue = 100;
      counterElement.textContent = `${currentValue}%`;

      setTimeout(() => {
        counterElement.style.opacity = "0";
        counterElement.style.transition = "opacity 1s ease";

        setTimeout(() => {
          counterElement.style.display = "none";
        }, 650);
      }, 350);

      return;
    }

    counterElement.textContent = `${currentValue}%`;

    const delay = Math.floor(Math.random() * 120) + 60;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

startLoader();
