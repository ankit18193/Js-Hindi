class parentClass{
    constructor(username,email,passcode){
        this.username=username
        this.email=email
        this.passcode=passcode
    }

}

class childClass extends parentClass{
    constructor(username,email,passcode){
        super(username)//super() is a more structured and specific way to call the parent class's constructor 
        this.email
        this.passcode
        // ParentClass.call(this, username, email, passcode);
    }
    setChild(){
        console.log(`NAME:${this.username}\nEMAIL:${this.email}\nPASSCODE:${this.passcode}`);
        
    }

}

let mychild=new childClass("chotu","chotu@.com",123)
mychild.setChild();
