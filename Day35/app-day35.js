const imageContainer = document.querySelector(".image-array");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

let idx = 0;
let arrayImage = document.querySelectorAll(".image");

let interval = setInterval(automate, 2000);

function automate() {
  idx++;
  scroll();
}

next.addEventListener("click", () => {
  idx++;
  scroll();
  resetTime();
});
previous.addEventListener("click", () => {
  idx--;
  scroll();
  resetTime();
});

function scroll() {
  if (idx > arrayImage.length - 1) {
    idx = 0;
  }

  imageContainer.style.transform = `translateX(-${idx * 800}px)`;
}

function resetTime() {
  clearInterval(interval);
  interval = setInterval(automate, 2000);
}
