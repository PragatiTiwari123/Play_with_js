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

// let intervalId ;
// let StartColorChanging = function(){
//      let changeColor =function(){
//         document.body.style.backgroundColor = Randomhexcode();
//      }
//     intervalId = setInterval(changeColor,1000);
// }
// let StopColorChanging = function(){
//     clearInterval(intervalId);
// }
// document.querySelector("#start").addEventListener('click',function(){
//     StartColorChanging();
// })
// document.querySelector("#stop").addEventListener('click',function(){
//     StopColorChanging();
// })

// FOr an optimized Approach 
// Corner Case : Memory is wasted when we stop i.e. not changing code we want it to free from the memory and we want next time we create it again

let intervalId ;
let StartColorChanging = function(){
     let changeColor =function(){
        if(!intervalId){ // if null
            document.body.style.backgroundColor = Randomhexcode();
        }
     }
    intervalId = setInterval(changeColor,1000);
}
let StopColorChanging = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector("#start").addEventListener('click',function(){
    StartColorChanging();
})
document.querySelector("#stop").addEventListener('click',function(){
    StopColorChanging();
})