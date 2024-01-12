function Randomhexcode(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i =0 ;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    // console.log(color);
    return color;
}
//  let RandomColor = Randomhexcode()
//  console.log(RandomColor);

let intervalId ;
let StartColorChanging = function(){
     let changeColor =function(){
        document.body.style.backgroundColor = Randomhexcode();
     }
    intervalId = setInterval(changeColor,1000);
}
let StopColorChanging = function(){
    clearInterval(intervalId);
}
document.querySelector("#start").addEventListener('click',function(){
    StartColorChanging();
})
document.querySelector("#stop").addEventListener('click',function(){
    StopColorChanging();
})