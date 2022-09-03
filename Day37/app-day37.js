const container = document.querySelector(".container");
const cardCount = 80;

const colorType = {
  garss: "#defde0",
  fire: "#fddfdf",
  water: "#def3fd",
  bug: "#f8d5a3",
  poison: "#98d7a5",
  flying: "#f5f5f5",
  electric: "#fcf7de",
  ground: "#f4e7da",
  fairy: "#fceaff",
  normal: "#f5f5f5",
  psychic: "#eaeda1",
  fighting: "#e6e0d4",
  rock: "#d5d5d4",
  dragon: "#97b3e6",
};
const typePoke = Object.keys(colorType);
const URL = "https://pokeapi.co/api/v2/pokemon/";

startApi();

async function startApi() {
  for (let i = 1; i < cardCount; i++) {
    await callApi(i);
  }
}

async function callApi(id) {
  let res = await fetch(URL + id);
  let data = await res.json();
  generatePoke(data);
  console.log();
}

function generatePoke(data) {
  const pokeEl = document.createElement("div");
  pokeEl.classList.add("card");

  let imgUrl = data.sprites["other"]["official-artwork"].front_default;
  let pokeId = data.id;
  let pokeName = data.name;
  let pokeType = data.types.map((type) => type.type.name);
  let currentType = typePoke.find((x) => pokeType.indexOf(x) > -1);
  let cardColor = colorType[currentType];

  pokeEl.innerHTML = ` <div class="img-container">
  <img src="${imgUrl}" class="image" alt="" />
</div>
<span class="id">#${pokeId}</span>
<h2>${pokeName}</h2>
<p>Type:${currentType}</p>`;
  pokeEl.style.backgroundColor = cardColor;
  container.appendChild(pokeEl);
}

const card = document.querySelectorAll(".card");

card.forEach((x) => {
  x.addEventListener("mousemove", (e) => {
    createHolo(e);
  });
});
function createHolo(val) {
  let l = e.clientX;
  let t = e.clientY;
  let h = card.height();
  let w = card.width();
  var px = Math.abs(Math.floor((100 / w) * l) - 100);
  var py = Math.abs(Math.floor((100 / h) * t) - 100);
  var pa = 50 - px + (50 - py);

  var lp = 50 + (px - 50) / 1.5;
  var tp = 50 + (py - 50) / 1.5;
  var px_spark = 50 + (px - 50) / 7;
  var py_spark = 50 + (py - 50) / 7;
  var p_opc = 20 + Math.abs(pa) * 1.5;
  var ty = ((tp - 50) / 2) * -1;
  var tx = ((lp - 50) / 1.5) * 0.5;
}
