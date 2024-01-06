var con = document.querySelector("#container")
var love = document.querySelector("i")
var icon = document.querySelector(".icon1")

con.addEventListener("dblclick",function () {
    love.style.opacity = '0.8'; 
    icon.style.color = 'red';
    setTimeout(function () {
        love.style.opacity = '0';        
    },2000) 
    setTimeout(function () {
        love.style.transform = 'translate(-50%,-50%) scale(0)';        
    },2000)  
})
var flag = 0;
icon.addEventListener("click",function () {
    if(flag === 0 ){
        icon.style.color = 'red';
        love.style.opacity = '0.8'; 
        setTimeout(function () {
            love.style.opacity = '0';        
        },2000) 
        setTimeout(function () {
            love.style.transform = 'translate(-50%,-50%) scale(0)';        
        },2000) 
        flag=1;
    }
    else{
        icon.style.color = '#fff';
        flag=0; 
    }
})

// setTimeout(function () {
    
// },2000) //5 sec = 5000 milisecond