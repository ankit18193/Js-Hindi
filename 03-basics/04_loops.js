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

// using Filter Function 

const nums=[1,2,3,4,5,6,7,8,9]
let newNums=nums.filter( (num)=> {
    return num>4
})

console.log(newNums);

// doing same using foor each loop

let newnumArr=[1,2,3,4,5,6,7,8,9]
let numArr=[]
newnumArr.forEach( (num)=> {
    if(num<5){
        numArr.push(num)
    }
})

console.log(numArr);
 
let myArray=[34,6,5,7,6,8,9,5]

myArray.forEach( (num,index,arr)=>{
     arr[index]=num+10;

});

console.log(myArray);

let b=[3,2,4,6,5,7,67]
let c=b.map((num)=>num+10)
console.log(c);

