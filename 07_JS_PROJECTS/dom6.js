var main=document.querySelector('#main')
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function (e) {
    // console.log("Hye");
    // console.log(e);
    // console.log(e.x);
    // console.log(e.y);
    crsr.style.left = e.x+"px"
    crsr.style.top = e.y+"px"
})