const bgImage = document.querySelector(".bg-image");
const pass = document.getElementById("password");
const btn = document.querySelector("#submit");

const form = document.getElementById("form");
const final = document.getElementById("final");

pass.addEventListener("input", (e) => {
  let valPas = e.target.value;
  let lengthVal = valPas.length;

  bgImage.style.filter = `blur(${20 - lengthVal * 2}px)`;
});

btn.addEventListener("click", () => {
  form.classList.add("no-show");
  if (final.classList.contains("noshow")) {
    final.classList.remove("no-show");
  }
  final.classList.add("show");
});
