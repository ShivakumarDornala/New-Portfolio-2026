// HAMBURGER MENU
const hamMenu = document.querySelector(".ham-menu");
const dropdown = document.querySelector(".show-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  dropdown.classList.toggle("md:right-9");
   dropdown.classList.toggle("right-3");
});

// AUTO SHOW ANIMATION
const autoShowElements = document.querySelectorAll(".autoShow");

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

autoShowElements.forEach(el => observer.observe(el));
