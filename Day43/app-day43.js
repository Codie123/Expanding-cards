const rates = document.querySelectorAll(".emo");
const send = document.querySelector(".btn");
const container = document.querySelector(".container");

const emoArr = [];

rates.forEach((x) => {
  x.addEventListener("click", () => {
    rates.forEach((y) => {
      if (y.classList.contains("active")) {
        y.classList.remove("active");
      }
    });
    x.classList.add("active");
  });
});

function generate(val) {
  container.innerHTML = `
  <i class="fa-solid fa-heart icon"></i>
  <h3>Thank You </h3>
  <strong>Feedback:${val}</strong>
  <p> We'll use your feedback to improve our customer support</p>`;
}

send.addEventListener("click", () => {
  let feed = "";
  rates.forEach((x) => {
    if (x.classList.contains("active")) {
      feed += x.dataset.value;
    }
  });

  generate(feed);
});
