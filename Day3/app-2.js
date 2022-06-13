const btnOpen = document.getElementById('open');
const bntClose = document.getElementById('close');
const container = document.getElementsByClassName('container')[0];

console.log(btnOpen)
console.log(bntClose)
console.log(container)

btnOpen.addEventListener('click',()=>{
    container.classList.add('active')
})
bntClose.addEventListener('click',()=>{
    container.classList.remove('active')
})
