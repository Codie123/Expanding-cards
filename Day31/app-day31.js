const resultEl = document.getElementById("result");
const passLength = document.getElementById("length");
const passUpper = document.getElementById("uppercase");
const passLower = document.getElementById("lowercase");
const passNumber = document.getElementById("numbers");
const passSymbole = document.getElementById("symbol");
const button = document.getElementById("generate");

button.addEventListener("click", () => {
  let len = passLength.value;
  let upper = passUpper.checked;
  let lower = passLower.checked;
  let num = passNumber.checked;
  let sym = passSymbole.checked;

  resultEl.innerHTML = generatePass(len, upper, lower, num, sym);
});

function generatePass(length, upper, lower, num, sym) {
  let generatedPassword = "";
  let typeCount = lower + upper + num + sym;
  let typeArr = [{ upper }, { lower }, { num }, { sym }];

  if (typeCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += fourFunctionObj[funcName]();
    });
  }

  let finalResult = generatedPassword.slice(0, length);
  return finalResult;
}

const fourFunctionObj = {
  upper: randomUpper,
  lower: randomLower,
  num: randomNum,
  sym: randomSymbol,
};

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbol() {
  const symbols = `!@#$%^&*(){}[]=<>/,.`;
  return symbols[Math.floor(Math.random() * symbols.length)];
}
