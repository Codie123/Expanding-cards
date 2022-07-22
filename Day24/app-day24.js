const header = document.getElementById('header')
const heading = document.getElementById('heading')
const para = document.getElementById('para')
const profile = document.getElementById('profile')
const name = document.getElementById('username')
const desc = document.getElementById('userdesc')

const animationBg = document.querySelectorAll('.animated-bg')
const animationText = document.querySelectorAll('animated-bg-text')

setTimeout(generatData, 2500);

function generatData(){
    header.innerHTML=`<img src="./images/subscribe.webp" alt="#">`
    heading.innerHTML = `Nothing PHone(1)`
    para.innerHTML = `Nohting Phone of 2022 is a unique design .`
    profile.innerHTML = `<img src="./images/afro.svg" alt=""> `
    name.innerHTML = `Elliott`
    desc.innerHTML = `july 14 2022`

    animationBg.forEach(x=>{
        x.classList.remove('animated-bg')
    })
    animationText.forEach(x=>{
        x.classList.remove('animated-bg-text')
    })
}
