const add = document.getElementById("add");
const main = document.getElementById("container");
let count = 0;
add.addEventListener("click", (e) => {
  generate(e);
});

if (main.childNodes.length <= 1) {
  count = 0;
}

function generate(value) {
  count++;
  let divEl = document.createElement("div");
  divEl.classList.add("note");
  divEl.innerHTML = ` <div class="head">
  <h3>Note ${count}</h3>
    <i class="fa-solid fa-trash" id = "delete"></i>
  </div>
  <div class="tex-area">
    <textarea name="note" class="text" rows="20" id="note"></textarea>
  </div>`;
  main.appendChild(divEl);

  const trash = document.querySelectorAll("#delete");
  let card = document.querySelectorAll(".note");

  trash.forEach((x, id) => {
    x.addEventListener("click", (e) => {
      count--;
      // reseting count to 0
      if (count <= 0) {
        count = 0;
      }
      card[id].remove();
    });
  });
}
