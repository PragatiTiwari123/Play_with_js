const promiseOne = new Promise(function(resolve,reject){
    //do any async tasks
    //DB calls, cryptography, n/w
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
}) // to create promise
promiseOne.then(function(){
    console.log('Promisr Consumed');
}) // then related to resolve

new Promise(function(resolve,reset){
    setTimeout(function(){
        console.log("async task do ");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 task done");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : 'chai',email : 'example@example.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error= false;
        if(!error){
            resolve({username : 'himani' , password : '123'})
        }
        else{
            reject('ERROR :Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((myusername)=>{
    console.log(myusername);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Finally : the promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error= false
        if(!error){
            resolve({username : 'JS' , password : '123'})
        }
        else{
            reject('ERROR :JS went wrong')
        }
    },1000)  
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getalluser(){
//     try {
//         // const  response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const  response = await fetch('https://api.github.com/users/hiteshchoudhary');
        
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getalluser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{console.log(data);})
.catch((error)=>{console.log(error);})