var arr = [
    {dp:"https://source.unsplash.com/900x900/?girl,beauty",story:"https://source.unsplash.com/900x900/?girl,newyork"},
    {dp:"https://source.unsplash.com/900x900/?beauty,girl",story:"https://source.unsplash.com/900x900/?girl,paris"},
    {dp:"https://source.unsplash.com/900x900/?girl,girl",story:"https://source.unsplash.com/900x900/?girl,london"},
    {dp:"https://source.unsplash.com/900x900/?girl,study",story:"https://source.unsplash.com/900x900/?girl,burjkalifa"}
]
var stories = document.querySelector(".storiya");
var clutter = ""
arr.forEach(function(elem,i){
    clutter += `<div class="story">
    <img id="${i}" src="${elem.dp}" alt="Profile">
</div>`
})


stories.innerHTML = clutter;

stories.addEventListener("click",function(e){
    // console.log(e); //prints pointer
    // console.log(e.target); // print the img tag #targeted element
    // console.log(e.target.id);   // id 0,1,2,3 index
    // console.log(arr[e.target.id]); // arr[0],arr[1]..
    // console.log(arr[e.target.id].story);  // arr[0].story , arr[1].story , ..
    // console.log(arr[e.target.id].story);
    document.querySelector(".full-screen").style.display = 'block';
    // document.querySelector(".full-screen").style.backgroundColor = 'blue'; 
    document.querySelector(".full-screen").style.backgroundImage = `url("${arr[e.target.id].story}")`;
    setTimeout(function () {
        document.querySelector(".full-screen").style.display = 'none';
    },3000)
})