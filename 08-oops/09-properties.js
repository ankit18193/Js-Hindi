console.log(Math.PI);

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
// ye Bohot Imporatant h 



let myObj={
    name:"user",
    age:22,
    email:"user@.com"
}

Object.defineProperty(myObj,"name",{
    value:"user",
    writable:false,
    enumerable:true,
    configurable:false
})

myObj.name="chotu"// ye overWrite nhi hogi 
console.log(myObj.name);



console.log(myObj);
