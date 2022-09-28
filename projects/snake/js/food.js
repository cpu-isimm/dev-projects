import { onSnake , expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

let food = getRandomFoodPosition()
let difficulty = document.getElementById("difficulty")
let diffUp = document.querySelector(".fa-caret-up-diff")
let diffDown = document.querySelector(".fa-caret-down-diff")
diffUp.addEventListener('click' , e=> {
    difficulty.innerHTML =  parseInt(difficulty.innerHTML) + 1
  })
  diffDown.addEventListener('click' , e=> {
      if(parseInt(diff.innerHTML) >= 2 ){
        difficulty.innerHTML =  parseInt(difficulty.innerHTML) - 1
      }
    })
   let EXPANSION_RATE = difficulty.innerHTML
export function getDifficulty ( ) {
 EXPANSION_RATE = difficulty.innerHTML
}
export function update() {
    if(onSnake(food)){
      document.getElementById("succes").play()
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
       
    }
   
}
export function draw(gameBoard) {
   
     const foodElement = document.createElement('div')
     foodElement.style.gridColumnStart = food.x
     foodElement.style.gridRowStart = food.y
     foodElement.classList.add('food') 
     gameBoard.appendChild(foodElement)   
    }
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition() 
    }
    return newFoodPosition
    
}
window.addEventListener('keydown' , e => {
  switch(e.key) {
      
           case "m" : 
           difficulty.innerHTML = parseInt(difficulty.innerHTML , 10) +1
           break
           case "l" : 
           if(difficulty.innerHTML == 1)
           break 
           else
           difficulty.innerHTML = parseInt(difficulty.innerHTML , 10) -1
           break
  }

})