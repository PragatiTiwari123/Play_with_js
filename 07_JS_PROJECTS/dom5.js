const clock = document.getElementById('clock')


// setInterval => perform on interval 

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleDateString());
    clock.innerHTML = date.toLocaleTimeString();
},1000) // 1s = 1000 milisecond