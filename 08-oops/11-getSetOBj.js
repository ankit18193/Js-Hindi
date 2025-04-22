const myobj={
    _email:"ankit@.com",
    _password:"1234acb",

    get email(){
      return this._email
    },
    set email(value){
        this._email=value.toUpperCase();
    }

}

let user=Object.create(myobj)
console.log(user.email);

// create(myobj) isko factory  function bolte h 

