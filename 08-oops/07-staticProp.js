class parentClass{
    constructor(username){
        this.username=username
    }
    printme(){
        console.log(`USERNAME:${this.username}`);
        
    }
    static creatId(){
        return `123`
    }
}

class childClass extends parentClass{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
let myUser=new childClass("chotu","chotu@ankit.com")
myUser.printme()
// console.log(myUser.creatId()); ye nhi hoga kyu ki createID ek ststic function h 

// Static methods ko class ke naam ke saath directly call karein, na ki instance ke saath.
console.log(childClass.creatId());


