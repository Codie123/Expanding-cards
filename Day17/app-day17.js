const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const container = document.querySelector('.container-movie')
const form = document.getElementById('form')
const userInput = document.getElementById('search')



getMovies(API_URL)


async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    generateMovie(data.results)
  
}

function generateMovie(movies){
    container.innerHTML = ""
    movies.forEach(movie => {
        let title = movie.title
        let posterImg = movie.poster_path
        let rating = movie.vote_average
        let overview = movie.overview

        let movieEl = document.createElement('div')
        movieEl.classList.add('movies')
        movieEl.innerHTML = `<img src="${IMG_PATH+posterImg}"> 
            <div class="content">
                <h2>${title}</h2>
                <span class="${generateClass(rating)}">${rating}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>
                    ${overview}
                </p>
            </div>
        `
        container.appendChild(movieEl)

    });
}

function generateClass(rate){
    if(rate>=8){
        return 'green'
    }else if(rate>=5){
        return 'brown'
    }else{
        return 'tomato'
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let searchTerm = userInput.value
    if(searchTerm&&searchTerm!==""){
        getMovies(SEARCH_API + searchTerm)
        console.log(`got inside and called the function `)
        userInput.value = ""
    }else{
        console.log(`check the correct move name in imdb and retypr again (*_*)`)
        window.location.reload()
    }

})