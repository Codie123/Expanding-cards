const container = document.getElementById("container");
const ShowText = "Hello Friend!";

let index = 1;
generateText();
function generateText() {
  container.innerHTML = ShowText.slice(0, index);
  index++;
  console.log(index);
  if (index > ShowText.length) {
    index = 1;
  }
  setTimeout(generateText, 300 / 1);
}
