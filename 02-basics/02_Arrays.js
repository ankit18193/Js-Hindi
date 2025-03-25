"use strict";
const list1=["one","two","three","four","five"];
const list2=["six","seven","eight","nine","ten"];
let list3=list1.concat(list2);// yaha hum concatinate kr rhe h 
console.log(list3);

let list4=[...list1,...list2]// yaha hum spread tha use kr ke concatinate kr rhe h 
console.log(list4);


console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));
console.log(Array.from({name:"putnu-putnu"}));// ye ek empty array return krta h kyu ki hum yaha define nhi kr rhe h ki kiss ko array me convert krein



