const container = document.querySelector(".container");
const countDiv = 700;
const arraycolor = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let i = 0; i < countDiv; i++) {
  const divEl = document.createElement("div");

  divEl.classList.add("box");

  divEl.addEventListener("mouseover", () => setColor(divEl));
  divEl.addEventListener("mouseout", () => removeColor(divEl));
  container.appendChild(divEl);
}

function setColor(x) {
  let cl = randomColor();

  x.style.backgroundColor = cl;
  x.style.boxShadow = `0 0 2px ${cl}, 0 0 7px ${cl}`;
}

function removeColor(x) {
  x.style.backgroundColor = `rgba(29,29,29,1)`;
  x.style.boxShadow = `0 0 2px rgba(29,29,29,1)`;
}

function randomColor() {
  return arraycolor[Math.floor(Math.random() * arraycolor.length)];
}
