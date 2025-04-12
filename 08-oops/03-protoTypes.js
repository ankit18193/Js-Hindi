"use strict "



let arr=["chai","coffee"]

let obj={
    user:"chotu",
    id:1223,
    printUser:function(){
        console.log(`user name is ${this.user}`);
        
    }
}

// creating a Object prototype to apply in all string,objects,arrays,functions



Object.prototype.applyObject=function(){
     console.log("yes the can access the ProtoTyped object data");
     
}


obj.applyObject();
arr.applyObject();
// implementing a trim() function as a method to apply on all string


let newName="userName    "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`the true lenght is:${this.trim().length}`);
    
}

newName.trueLength()

"ankit".trueLength()