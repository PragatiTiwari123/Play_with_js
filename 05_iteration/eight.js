//Reduce 

const myNums=[1,2,3,4]

const newTotal=myNums.reduce(function (acc,cur) {
    // console.log(`acc : ${acc} and curr : ${cur}`);
    return acc+cur;
} ,0);

// console.log(newTotal);

const newTotalO=myNums.reduce( (acc,cur) => acc+cur , 0);
// console.log(newTotalO);

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "Mobile Dev Course",
        price : 5999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    }
]

const addPrice=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(addPrice);