const button = document.getElementById('btn-joke')
const jokeElement = document.getElementById('joke')

button.addEventListener('click',JokeGenerator)
async function JokeGenerator(){
    let resJoke = await fetch('https://icanhazdadjoke.com',{headers:{'Accept':'application/json'}})
    let randomJoke = await resJoke.json()
    jokeElement.innerText = randomJoke.joke
}