const header = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const block = document.querySelector(".empty-block");
menu.addEventListener("click", () => {
  if (header.classList.contains("active")) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }
});

block.addEventListener("mousemove", (e) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  block.style.setProperty("--x", x + "px");
  block.style.setProperty("--y", y + "px");
});
