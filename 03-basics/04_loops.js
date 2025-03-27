"use strict";

// forEach Loop

let myArr=[34,5,6,35,7,76,5];
myArr.forEach( (i)=>{
    console.log(i);
    
})

//accessing Arrays of Object's Element

let myArrObj=[
    {
        name:"chotu",
        address:"dhanbad"
    },
    {
        name:"motu",
        address:"delhi"
    },
    {
        name:"patlu",
        address:"bengaluru"
    }
]
myArrObj.forEach( (i)=>{
    console.log(`user ${i.name}'s location is ${i.address}`);
    
})
for (const key in myArr) {
    console.log(`${key}=>${myArr[key]}`);
    
    
}