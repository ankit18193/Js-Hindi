# projects related to DOM

# project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## project 1
### Color changing
```javaScript

const button=document.querySelectorAll('.button')
const body=document.querySelector('body')

button.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id ==='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id ==='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id ==='white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id ==='yellow'){
      body.style.backgroundColor=e.target.id
    }
  })
})


```

 ## project 2
 ### BMI calculator

``` javaScript
const form=document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value);
  
  const weight=parseInt(document.querySelector('#weight').value);
  
  const results=document.querySelector('#results');
  const info=document.querySelector('#info')
  if(height==='' || height<=0 || isNaN(height)){
    results.innerHTML= `please enter a valid height ${height} `
  }
  else if(weight===''|| weight<=0 || isNaN(weight)){
    results.innerHTML= `please enter a valid height ${weight} `
  }
  else{
   const bmi= (weight/((height*height)/10000)).toFixed(2);
   results.innerHTML=`<span>${bmi}</span>`;

   if(bmi<18.6){
    info.innerHTML=`you are under weight`
   }
   else if(bmi>18.6 && bmi<24.9){
    info.innerHTML=`you are in Normal Range `
   }
   else{
    info.innerHTML=`you are Over weight`
   }

  }
})
```

## project 3
### clock [real time ]
``` javaScript

const clock = document.querySelector('#clock')

// setInterval(function(){
//  let date = new Date();
//  clock.innerHTML=date.toLocaleTimeString();
// },1000)

```

## project 4
### Random Number Game
``` javaScript
let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
   let guess=parseInt(userInput.value)
   validateGuess(guess)
  })
}

function validateGuess(guess) {
  if(isNaN(guess)){
    alert(`please enter a valid Number`)
  }
  else if(guess<1){
    alert(`please enter a valid Number`)
  }
  else if(guess>100){
    alert(`please enter a valid Number`)
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`game Over.random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)

    }
    
    
    
  }

  

}
function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage(`you guess right`)
  }
  else if(guess<randomNumber){
    displayMessage(`number is low`)
  }
  else if(guess>randomNumber){
    displayMessage(`number is High`)
  }

}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML+=`${guess}  `
  numGuess++
  remaining.innerHTML=`${11-numGuess}`

}
function displayMessage(message) {
  lowOrHi.innerHTML=`<h2>${message}</h2>`

}
function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()

}
function newGame(){
  const newGamebutton=document.querySelector('#newGame')
  newGamebutton.addEventListener('click',function(e){
    randomNumber= parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    guessSlot.innerHTML=''
    numGuess=1
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true
  })

}

```
