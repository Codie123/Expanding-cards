const buttons = document.querySelectorAll(".button");

const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    logic(e.target);
  });
});

function logic(value) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === value) {
      fast.checked = false;
    }
    if (cheap === value) {
      good.checked = false;
    }
    if (fast === value) {
      cheap.checked = false;
    }
  }
}
