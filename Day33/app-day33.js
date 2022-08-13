const add = document.getElementById("add");
const main = document.getElementById("container");
add.addEventListener("click", (e) => {
  generate(e);
});

function generate(value) {
  let divEl = document.createElement("div");
  divEl.classList.add("note");
  divEl.innerHTML = ` <div class="head">
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash" id = "delete"></i>
  </div>
  <div class="tex-area">
    <textarea name="note" class="text" rows="20" id="note"></textarea>
  </div>`;
  main.appendChild(divEl);
}
