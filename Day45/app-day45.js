const menu = document.querySelector(".icon");
const close = document.querySelector(".close-icon");
const nav = document.querySelectorAll(".nav");
menu.addEventListener("click", () => {
  nav.forEach((x) => {
    x.classList.add("active");
  });
});
close.addEventListener("click", () => {
  nav.forEach((x) => {
    x.classList.remove("active");
  });
});
