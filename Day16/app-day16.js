const glaseSmall  = document.querySelectorAll('.cup')

glaseSmall.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>{
       highlighter(idx)//calling the fucntion for active classes
    })
})

function highlighter(input){
    //function to create active classes on the clicked glases
    if(glaseSmall[input].classList.contains('active') && !glaseSmall[input].nextElementSibling.classList.contains('active')){
        input--
    }
    glaseSmall.forEach((cups,idx)=>{
        if(idx<=input){
                    cups.classList.add('active')

        }else{
            cups.classList.remove('active')
        }
    })
    
waterGen()

}
function waterGen(){
    let totalGlass= document.querySelectorAll('.cup.active').length
    let glasses = document.querySelectorAll('.cup').length
    
    let water = document.getElementById('water-per')
    let remain = document.getElementById('remain-val')
    let containerRemain = document.querySelector('.content')
    if(totalGlass === 0){

        water.style.visibility = 'hidden'
        water.style.height = `${0}px`
    }else{
        water.style.visibility = 'visible'
        water.style.height = `${totalGlass/glasses *330}px`
        water.innerText=`${(totalGlass/glasses)*100}%`
    }
    if(totalGlass === glasses){
        containerRemain.style.visibility = 'hidden'
        containerRemain.style.height= `${0}px`
    }else{
        containerRemain.style.visibility = 'visible'
        remain.innerText = `${2-(250*totalGlass/1000)}L`
    }
    

}