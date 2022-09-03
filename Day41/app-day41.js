const code = document.querySelectorAll(".input");
code[0].focus();

code.forEach((x, id) => {
  x.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      code[id].value = "";
      setTimeout(() => {
        code[id + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        code[id - 1].focus();
      }, 10);
    }
  });
});
