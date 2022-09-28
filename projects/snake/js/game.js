import { SNAKE_SPEED , gameSpeed , update as updateSnake , draw as drawSnake , getSnakeHead , snakeIntersection, gameScore } from './snake.js'
import {draw as drawFood , update as updateFood , getDifficulty} from './food.js'
import {outsideGrid} from './grid.js'


let lastRenderTime = 1
const gameBoard = document.getElementById('game-board')


let gameOver = false
function main(currentTime) {
if(gameOver){
   document.getElementById("fail").play()
   if(confirm("you lost , your press ok to restart ")){
    window.location = './'
   }
   
 return
}

window.requestAnimationFrame(main)
const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

if( secondsSinceLastRender < 1 / SNAKE_SPEED) return

lastRenderTime = currentTime


update()
draw()
}



window.requestAnimationFrame(main)


function update () {
getDifficulty()
gameSpeed()
gameScore()
checkDeath()
updateSnake()
updateFood()
}

function draw() {
gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}
function checkDeath () {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


