const search = document.getElementById('search')
const textBox = document.getElementsByClassName('container')[0]

search.addEventListener('click',()=>{
    textBox.classList.toggle('active')
})