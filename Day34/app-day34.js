const nums = document.querySelectorAll(".container span");
const block = document.querySelector(".block");
const final = document.querySelector(".final");
const replay = document.getElementById("replay");

animator();

function resetDOM() {
  block.classList.remove("hide");
  final.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
}

function animator() {
  nums.forEach((num, idx) => {
    console.log(num);
    const lastidx = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      console.log("inside");
      if (e.animationName === "goin" && idx !== lastidx) {
        console.log("hey friedn");
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goout" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        block.classList.add("hide");
        final.classList.add("show");
      }
    });
  });
}
replay.addEventListener("click", () => {
  resetDOM();
  animator();
});
