const btnIncrease = document.getElementById('incre')
const btnDecrease = document.getElementById('decre')
const sizeDisplay = document.getElementById('size')
const panel       = document.getElementById('panel')
const colorEl = document.getElementById('color')
const clear = document.getElementById('clear')


let defaultSize = 5
let color = 'black'

let x,y
let ctx = panel.getContext('2d')
let mousePressed = false
btnIncrease.addEventListener('click',()=>{
    defaultSize += 5
    if(defaultSize>50){
        defaultSize = 50
    }
    sizeDisplay.innerText = defaultSize
})

btnDecrease.addEventListener('click',()=>{
    defaultSize -= 5
    if(defaultSize<=5){
        defaultSize = 5
    }
    sizeDisplay.innerText = defaultSize
})

panel.addEventListener('mousedown',(e)=>{
    mousePressed = true
    x = e.offsetX    
    y = e.offsetY

})
panel.addEventListener('mouseup',(e)=>{
    mousePressed = false
    x = undefined    
    y = undefined
    
})
panel.addEventListener('mousemove',(e)=>{
   if(mousePressed){
    const x2 = e.offsetX
    const y2 = e.offsetY
    circle(x2,y2)
    line(x,y,x2,y2)
    x = x2
    y = y2
   }
})
 
function circle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,defaultSize,0, Math.PI * 2)
    ctx.fillstyle = color
    ctx.stroke()
}
function line(x,y,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = defaultSize * 2
    ctx.stroke()

}
console.log(Math.PI * 2)

colorEl.addEventListener('change', (e) => color = e.target.value)

// clear the panel
clear.addEventListener('click', () => ctx.clearRect(0,0, panel.width, panel.height))