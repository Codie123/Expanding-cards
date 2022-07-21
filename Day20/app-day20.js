const btn  = document.querySelector('.btn')

btn.addEventListener('click',(c)=>{
    let x = c.clientX
    let y = c.clientY

    let targetTop = c.target.offsetTop
    let targetLeft = c.target.offsetLeft

    let xInside = x - targetLeft
    let yInside = y - targetTop

    let circleEl = document.createElement('span')
    console.log(circle)
    circle.classList.add('circle')
    circle.style.top=`${yInside}px`
    circle.style.left = `${xInside}px`
    btn.appendChild(circleEl)

    setTimeout(()=>{circleEl.remove()},5000);
})