const buttons=document.querySelectorAll('button')
const display=document.querySelector('.display')


let currentValue=""

buttons.forEach((btn)=> {
 btn.addEventListener('click',function(){
   const value=btn.textContent

   if(value==="C"){
    currentValue=""
   }
   else if(value==="="){
    try{
        currentValue=eval(currentValue).toString()

    }catch(error){
        currentValue="Error"
    }
   }
   else{
    currentValue+=value;
   }
   display.value=currentValue
 })

})