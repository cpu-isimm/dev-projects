
import { getInputDirection } from "./input.js"

let diff = document.getElementById("difficulty")
let speed = document.getElementById('speed')
let speedUp = document.querySelector(".fa-caret-up-speed")
let speedDown = document.querySelector(".fa-caret-down-speed")
const restart = document.querySelector(".custom-btn")
const snakeBody = [
    {x:11 , y:11},  
]
let newSegments = 0 
 let score = document.getElementById('score')

speedUp.addEventListener('click' , e=> {
    speed.innerHTML =  parseInt(speed.innerHTML) + 1
  })
  speedDown.addEventListener('click' , e=> {
      if(parseInt(speed.innerHTML) >= 2 ){
          speed.innerHTML =  parseInt(speed.innerHTML) - 1
      }
    })



    export let isPaused = false
export let SNAKE_SPEED = speed.innerHTML


export function gameSpeed () {
     SNAKE_SPEED = speed.innerHTML
}

export function update() {
     if(isPaused) {
return
     } else {
        addSegments()
        const inputDirection = getInputDirection()
       for (let i = snakeBody.length - 2 ; i >= 0 ; i--) {
        snakeBody[i+1] = {... snakeBody[i]} 
        }
        snakeBody[0].x += inputDirection.x
        snakeBody[0].y += inputDirection.y
     }
}
export function draw(gameBoard) {
    snakeBody.forEach(segment => { 
     const snakeElement = document.createElement('div')
     snakeElement.style.gridColumnStart = segment.x
     snakeElement.style.gridRowStart = segment.y
     snakeElement.classList.add('snake') 
     gameBoard.appendChild(snakeElement)   
    })
    }

export function expandSnake(amount) {
newSegments += amount
}   
export function onSnake(position , {ignoreHead = false }= {}) {
    return snakeBody.some((segment, index)=> {
        if (ignoreHead && index === 0 ) return false
        return equalPositions(segment , position)
       
    })
} 
function equalPositions(pos1 , pos2) {
    return pos1.x === pos2.x && pos2.y === pos1.y
}
function addSegments() {
    
    for(let i = 0 ; i < newSegments ; i++) {
snakeBody.push({...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
   

    
}
export function getSnakeHead () {
    return snakeBody[0]
}
export function snakeIntersection () {
    return onSnake(snakeBody[0] ,{ ignoreHead :true})

}
export function gameScore () {
    if (snakeBody.length == 1)
    return score.innerHTML = 1
    else
    return score.innerHTML = (snakeBody.length - 1) + ( parseInt(diff.innerHTML , 10) + parseInt(speed.innerHTML , 10))
}
restart.addEventListener('click' , (e) => {
    if (isPaused)
    {isPaused = false
      restart.innerHTML="Pause"}
    
     else 
     {
      isPaused = true
      restart.innerHTML = "Resume"
     }
     
    })
    window.addEventListener('keydown' , e => {
        switch(e.key) {
            case "p" :
                if (isPaused)
                {isPaused = false
                  restart.innerHTML="Pause"}
                
                 else 
                 {
                  isPaused = true
                  restart.innerHTML = "Resume"
                 }
                 break
                 case "+" : 
                 speed.innerHTML = parseInt(speed.innerHTML , 10) +1
                 break
                 case "-" : 
                 if(speed.innerHTML == 1)
                 break 
                 else
                 speed.innerHTML = parseInt(speed.innerHTML , 10) -1
                 break
        }

    })