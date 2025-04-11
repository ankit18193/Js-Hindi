"use strict"


let myPromise = new Promise(function(resolve,reject){

    setTimeout(()=>{
         console.log(`3sec. the promise is working`)
         resolve()
    },3000)
})
console.log("asyn is also working");

myPromise.then(()=>{
    setTimeout(() => {
        console.log(` 2sec. the then() is also connected`);
        
    },2000);

})
    


//Another way to decleare a promise 

new Promise(function(resolve,reject){
    console.log("another way to implement promises");
    resolve();
}).then(()=>{
    console.log("the callback is connected");
    
})
// Another way by passing some parameters


let promiseOne=new Promise(function(resolve,reject){
    console.log("this promise no. three");
    resolve({userName:"ankit", email:"ankit.chotu.com"})

    
})

promiseOne.then((user)=>{
   console.log(user)
})

// PROMISE CHANNING


let promiseTwo=new Promise(function(resolve,reject){
    console.log("this is 3rd promise")

    let error=true;
    if(!error){

        resolve({user:"chotu",email:"chotu@chotu.com"})
    }
    else{
        reject("SOMTHING WENT WRONT ERROR")
    }

})
let promiseStatus=""

promiseTwo.then((user)=>{
    console.log(user);
    promiseStatus="resolved"
    return user.user
    
}).then((user)=>{
    console.log(user);
    
}).catch((error)=>{
    console.log(error);
    promiseStatus="rejected"
    
}).finally(()=>{
    if(promiseStatus==="resolved"){
        console.log("successfull");
        
    }
    else{
        console.log("unSuccessfull");
        
    }
    
})


let promiseThree=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let error=true
        if(!error){
            resolve({userName:"promiseCode",passcode:"21233"})
        }
        else{
            reject("UNABLE TO HANDLE ERROR OCCURS")
        }
     },5000)
})

// async function consumePromise(){
//   let gotResponse=await promiseThree
//   console.log(gotResponse);
// }
// consumePromise()

// ye sab run ho rha h kyu ki ye yaha error true h tb  bina catch block ke run ho rha h

// lets try with try and catch block 



async function consumePromise(){
    try {
        let gotResponse=await promiseThree
        console.log(gotResponse);
        
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromise();

// PROMISE, FETCHING AN API USING FECTCH{OBJECT}





 async function promiseFour(){
try{

    let fetchData =  await fetch("https://randomuser.me/api/")
    let getFetchData=  await fetchData.json();// yaha bhi await dena hoga kyu ki ye bhi convert hone me time leta h 
    console.log(getFetchData);
}catch(error){
  console.log("ERROR HAS BEEN FOUND.........");
  
 }  
}
promiseFour();



fetch("https://api.api-ninjas.com/v1/randomuser")
.then((gotdata)=>{
    return gotdata.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error=>{

    console.log(error);
}))


 