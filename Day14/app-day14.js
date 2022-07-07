const toggle = document.querySelector('nav')
const button = document.querySelector('button')

button.addEventListener('click',()=>{
    toggle.classList.toggle('active')
})
