const icons = document.querySelectorAll(".mob-nav i");
const images = document.querySelectorAll(".mobile-card img");

icons.forEach((x, id) => {
  x.addEventListener("click", () => {
    removeShow();
    removeActive();
    images[id].classList.add("show");
    x.classList.add("active");
  });
});

function removeShow() {
  images.forEach((x) => x.classList.remove("show"));
}
function removeActive() {
  icons.forEach((x) => x.classList.remove("active"));
}
