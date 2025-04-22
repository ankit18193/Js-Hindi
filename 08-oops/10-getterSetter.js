class getterSetter{
    constructor(email,passcode){
        this.email= email
        // this.passcode=passcode
        // Agar aap this.passcode = passcode; likhte hain, toh passcode property directly accessible ho jati hai. Iska matlab hai ki aap getter aur setter methods ke bina hi passcode property ko directly access aur modify kar sakte hain. Isse encapsulation ka concept break ho jata hai, aur aap property ke value par koi validation ya control nahi rakh sakte.
        // Insted of this we will use
        
        this.passcode=passcode

    }
    get passcode() {
        return this._passcode


    }

    set passcode(value){
        if(value.toString().length>=5){
            this._passcode=value
        }
        else{
            console.log(`enter passcode more then 5 letters`);
            
        }
    }
    get email(){
        return this._email
    }
    set email (value){
        // return this._email.toUpperCase(); setter kuch return nhi krte hai 
        this._email=value.toUpperCase()
    }
}

let user=new getterSetter("chotu@g.com",331234)
console.log(user);



user.passcode=1238888
console.log(user.passcode);

// similarly we will try with EMAIL

const newUser= new getterSetter("ankit@ankit.com",12345567)
console.log(newUser);
