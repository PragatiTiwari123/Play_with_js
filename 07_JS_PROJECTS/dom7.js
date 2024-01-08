var elem = document.querySelectorAll(".elem")
// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function (e) {
//     // console.log(e.x);
//     elemImage.style.left = e.x+"px";
//     elemImage.style.top = e.y+"px";
// })
// elem1.addEventListener("mouseenter",function (e) {
//     // console.log(e.x);
//     elemImage.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave",function (e) {
//     // console.log(e.x);
//     elemImage.style.opacity = 0;
// })

elem.forEach(function (val) {
    // console.log(val);

    // console.log(val.childNodes[3]);
    // console.log(val.childNodes[3]);
    // var elemImage = document.querySelector(val);

    var elemImage = (val.childNodes[3]);
    // console.log(elemImage);

    val.addEventListener("mousemove",function(e){
        // console.log(e.x);
        // console.log(e.x);
        elemImage.style.left = e.x + "px";
        // elemImage.style.top = e.y + "px";
    })
    val.addEventListener("mouseenter",function(){
        elemImage.style.opacity = 1;
    })
    val.addEventListener("mouseleave",function(){
        elemImage.style.opacity = 0;
    })
})