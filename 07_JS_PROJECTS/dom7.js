var elem1 = document.querySelector("#elem1")
var elemImage = document.querySelector("#elem1 img")

elem1.addEventListener("mousemove",function (e) {
    // console.log(e.x);
    elemImage.style.left = e.x+"px";
    elemImage.style.top = e.y+"px";
})
elem1.addEventListener("mouseenter",function (e) {
    // console.log(e.x);
    elemImage.style.opacity = 1;
})
elem1.addEventListener("mouseleave",function (e) {
    // console.log(e.x);
    elemImage.style.opacity = 0;
})