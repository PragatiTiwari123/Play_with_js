const mar_heroes = ["Thor","Ironman","SpiderMan"]
const dc_heroes = ["superman","flash","batman"]

// mar_heroes.push(dc_heroes);  //nested array traeating dc_heroes array as data element i.e. 4th
// console.log(mar_heroes)     //work in existing array
// console.log(mar_heroes[3])
// console.log(mar_heroes[3][1])

const all_heroes=mar_heroes.concat(dc_heroes) //work on new array
console.log(all_heroes);                     //It concatenate two two arrays in a new array

const all_new_heroes = [...mar_heroes,...dc_heroes] //spread the arrays in a new array ... means spreading of arrays
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)  //remove the nesting in array, layer by layer 
console.log(real_another_array);

console.log(Array.isArray("Pragati")) //to check whether it is array or not
console.log(Array.from("Pragati"))  //each character converted into arrays
console.log(Array.from({name:"Pragati"})) //Interesting Case:: we have to tell ki hume kis se array bnana hai e.g. key se,values k array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //converted into arrays