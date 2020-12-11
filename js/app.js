const toggleBtn = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const closeEl = document.querySelector(".close");
toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
  hamburger.classList.toggle("hamburger-hide");
  closeEl.classList.toggle("close-show");
});
