"use strict";

//   ************Dates & Timings **************

let myDate= new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate);
console.log(myDate.getDate());


let newDate=new Date(2021, 11, 25, 10, 30, 0, 0);
console.log(newDate.toString());
 let myNewDate=new Date()
  let myWeekday = myNewDate.toLocaleString('default',{weekday:'long'});
    console.log(myWeekday);


