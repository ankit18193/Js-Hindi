"use strict";

console.log(null>0);
// Comparison (>, <, >=, <=) operations null ko number me convert karte hain.

// null ko 0 me convert kiya jata hai for comparisons.
// 0 > 0 false hota hai, isiliye output false aata hai.

console.log(null==0);
// Equality (==) operator type conversion alag tarike se karta hai.
// null sirf undefined ke barabar hota hai, kisi aur value ke nahi.
console.log(null==undefined);// ye true hoga 

console.log(null>=0);
// Comparison operators (>=, <=) null ko 0 me convert kar dete hain.
// null >= 0 becomes 0 >= 0, jo true hota hai.


