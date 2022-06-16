const leftPanel = document.querySelector('.split-I')
const rightPanel =document.querySelector('.split-II')
const container = document.querySelector('.container')

leftPanel.addEventListener('mouseenter',()=>{
    container.classList.add('hover-left')
})
leftPanel.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-left')
})
rightPanel.addEventListener('mouseenter',()=>{
    container.classList.add('hover-right')
})
rightPanel.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-right')
})