let myobj={
    userName:"ankit",
    email:"ankit123.com",
    address:"bangalore",
    age:22,
    objFun: function(){
      console.log(this);
      console.log(`user:${this.userName}`);
      

    }
}

console.log(myobj["email"])
console.log(myobj);
console.log(this);
console.log(myobj.objFun());



// getting some knowledge about new keyword


 function myfunction(userName,logcount,islogged){
    this.userName=userName
    this.logcount=logcount
    this.islogged=islogged
    return this

}
let userOne=myfunction("motu",33,true)// yaha pr hmne userone me value daali 
let userTwo=myfunction("patlu",3,false)// yaha pr value overwrite ho gai bina console log kiye 

console.log(userOne);

let newUserOne=new myfunction("newUserOne",9,true)
let newUserTwo=new myfunction("newUserTwo",8,false)

console.log(newUserOne);
console.log(newUserTwo);

console.log(newUserTwo.constructor);


// abb yaha overWrite nhi  hoga kyu ki "NEW" keyword ke use krne se 
// ye ke hamesha new INSTANCE deta h 

