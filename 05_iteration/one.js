//for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (index==5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop : ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop : ${j} and Inner loop : ${i}`); 
    }
}