class car{
    constructor(name,year,colour){
        this.name=name
        this.year=year
        this.colour=colour
    }

    printDetails(){
      console.log(`MODEL NAME:${this.name}\nBUYING YEAR:${this.year}\n COLOUR:${this.colour}`);
      

    }
        
}
let myCar=new car("Mustang",1969,"Black")
myCar.printDetails()

// Basically yaha hum prototyping wale method ko aur aasan bna rhe h Class ka use kr ke 
// or line of code bhi reduce kr rhe h 

