"use strict";


let course ={
    userName:"chotu",
     courseName:"javaScript",
     courseInstructor:"Hitesh",
     price:999,
     validity:"1-month",
     welcomeMessage:function(){
        console.log(`congratulations ${this.userName} ,you are welcome to this ${this.courseName} course. Your course Instructor is ${this.courseInstructor} and your cousre validity is valid for ${this.validity},from the you logged-In after you paid the amount of ${this.price}.Thank you`);
        

        console.log(this);
     },
     
}

// course.welcomeMessage();
course.price=1999
// course.welcomeMessage();
course.userName="falanwa"
course.welcomeMessage();


// ****** using Arrow Function *******

let newArrowfun=()=>{
    console.log("hello world");
    
}

newArrowfun();

let addFunction=(num1,num2)=>{
    return num1+num2;
}
let result=addFunction(1,4)
console.log(result);
