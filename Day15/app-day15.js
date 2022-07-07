const count = document.querySelectorAll('.counter')

console.log(count)
count.forEach(x=>{
    let load = 0,
    end = x.dataset.target,
    nSecond = 2,
    resolutionMS = 33,
    deltaNum = (end - load) / (1000 / resolutionMS) / nSecond;//inspired from stack overflow

    let interval = setInterval(counter,resolutionMS)
    
function counter(){

    load++
    if(load < end){
        load += deltaNum;
        // // details
        // if(load>end){
        //     load=Math.floor(end)
        // }else{
        // load =Math.floor(Math.min(load, end));//stack overflow
        // }
        //Using math.min on line 18-22
        load= Math.floor(Math.min(load,end))
    
        x.innerText = load
    }
    else{
        clearInterval(interval)
    }
    
}
})



