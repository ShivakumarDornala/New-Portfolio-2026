// AUTO SHOW ANIMATION
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // Optional: remove show class when element leaves viewport
      // entry.target.classList.remove("show");
    }
  });
}, observerOptions);

// Observe all elements with autoShow and autoShow1 classes
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".autoShow, .autoShow1").forEach((el) => {
    observer.observe(el);
  });
});

// HAMBURGER MENU
const dropdown = document.querySelector(".dropdown-menu");
function onToggleMenu(e) {
  e.name = e.name == "menu" ? "close" : "menu";
  dropdown.classList.toggle("top-16");
}

// VOICE OVER
let audio = document.getElementById("audio");
let playpauseBTN = document.getElementById("playpauseBTN");

let count = 0;

function playpause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playpauseBTN.innerHTML = "&#9208;";
  } else {
    count = 0;
    audio.pause();
    playpauseBTN.innerHTML = "&#9658;";
  }
}
