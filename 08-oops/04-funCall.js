function setUserName(userName){
this.userName=userName
}

function createUser(userName,email,password){
    setUserName.call(this,userName) // Pass `this` explicitly using `.call()`
    this.email=email
    this.password=password
}

// Yahaan setUserName function ko bina this context ke call kiya gaya hai. Is wajah se setUserName function ke andar this global object ko refer kar raha hai, aur userName property naye object (myUser) mein set nahi ho rahi.

let myUser = new createUser("chotu","chotu@.com",123)
console.log(myUser);
