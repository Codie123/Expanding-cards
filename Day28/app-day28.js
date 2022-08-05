const apiUrl = "https://api.github.com/users/"

let main = document.getElementById('main')
const search = document.getElementById('search')
const form = document.getElementById('form')
// const card = document.querySelector('.card')

async function hello(username){
        let data = await fetch(apiUrl + username)
        let res = await data.json()
        createCard(res)
        userRepo(username)
}
async function userRepo(username){
    let data = await fetch(apiUrl + username + `/repos?sort=created`)
    let res = await data.json()
    createRepo(res) 
}

function createCard(value){
    let divEl = `
    <div class="card">
        <div class="profile">
            <img src="${value.avatar_url}" alt="" />
        </div>
        <div class="content">
            <h1>${value.name}</h1>
            <p>${value.bio}</p>
            <ul class="social">
                <li>${value.followers}<strong>Followers</strong></li>
                <li>${value.following} <strong>Following</strong></li>
                <li>${value.public_repos} <strong>Repos</strong></li>
            </ul>
            <div class="repos" id="repos">
            </div>
        </div>
    </div>`
  main.innerHTML = divEl
  
}

function createRepo(value){
    let repoEl = document.getElementById('repos')
    value.slice(0,5).forEach(repo => {
        let a = document.createElement('a')
        a.innerHTML = repo.name
        a.href = repo.html_url
        a.target = "_blank"
        repoEl.appendChild(a)
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = search.value
    if(name){

        hello(name)
        
        search.value = ''
    }
})

