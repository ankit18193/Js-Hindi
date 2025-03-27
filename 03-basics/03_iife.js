"use strict";
//Immediately Invoked Function Expression (IIFE)

// iska use hm baiscally use is liye krte h kyu ki jb hm koi function ko immediate call krete h or 
// Global scope se pollution hoti h kai baar ,waha jo bhi variable decleare hoti h  uske pollution ko kam krne ke liye hm IIFE ka use krte h 

// Example

(function bataBaseConnect(){
    // named IIFE
    console.log("BD Connect");
    

})();

((name)=>{
    //un-named IIFE
    console.log(`running a function without any function name `);
    console.log(`welcome ${name}`);
    
})("ankit");
