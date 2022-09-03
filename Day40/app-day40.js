const container = document.querySelector(".container");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  container.classList.toggle("xl");
});
generate();
function generate() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const divEl = document.createElement("div");
      divEl.classList.add("box");
      divEl.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      container.appendChild(divEl);
    }
  }
}
