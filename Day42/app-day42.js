const search = document.getElementById("search");
const container = document.querySelector(".user-list");
const listItem = [];

callApi();

search.addEventListener("input", (e) => {
  //   filterUser();

  sorteName(e.target.value);
});

async function callApi() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  results.forEach((user) => {
    let divEl = document.createElement("div");
    divEl.classList.add("users");
    divEl.innerHTML = ` <div class="profile">
                                <img src="${user.picture.large}" alt="" />
                            </div>
                            <div class="user-details">
                                <h3 class="userName">${user.name.first} ${user.name.last}</h3>
                                <p>${user.location.city}, ${user.location.country}</p>
                            </div>`;

    container.appendChild(divEl);
  });
}

function sorteName(val) {
  let username = document.querySelectorAll(".userName");
  let users = document.querySelectorAll(".users");
  if (!val.value) {
    reset(users);
  }
  username.forEach((x, id) => {
    if (!x.innerHTML.startsWith(val.toUpperCase())) {
      users[id].classList.add("hide");
    }
  });
}
function reset(user) {
  user.forEach((x) => {
    x.classList.remove("hide");
  });
}
// function filterUser(x) {
//   console.log(listItem);
// }
