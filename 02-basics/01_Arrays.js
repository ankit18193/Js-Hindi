"use strict"
//  let myArray=[1,2,3,4,5,6,7,8,9,10];
//     console.log(myArray);
//     myArray.push(11);
//     console.log(myArray);

//     myArray.pop();
//     console.log(myArray);
//     myArray.unshift(0);
//     console.log(myArray);
//     myArray.shift();
//     console.log(myArray);



    let newArray=[1,2,3,4,5,6,7,8,9,10];

    console.log("A "+ newArray);//printing the array

   let sliceArray= newArray.slice(0,4);// it will slice the array from 0 to 4,last index is not included
    console.log(sliceArray);//printing the sliced array

     //startIndex: Kis index se slicing shuru karni hai.
    //  endIndex: Kis index tak slicing karni hai (yeh exclusive hota hai, yani endIndex ka element include nahi hota).
    

    console.log("B "+newArray);//printing the array

   let spliceArray= newArray.splice(0,4);// it will remove the elements from 0 to 4

    console.log(spliceArray);//printing the spliced array
    // array.splice(startIndex, deleteCount);
    // startIndex: Kis index se removal shuru karna hai.
    // deleteCount: Kitne elements ko remove karna hai (not the ending index).

    console.log("C "+newArray); //printing the array

    

