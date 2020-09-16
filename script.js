/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const box = 32
const snake = []
let direction = 'right'

// Initial coordinates
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

const createBackground = () => {
  context.fillStyle = 'lightgreen'
  // fillRect(x, y, width, height)
  context.fillRect(0, 0, 16 * box, 16 * box)
}

const createSnake = () => {
  snake.map((snake) => {
    context.fillStyle = 'green'
    context.fillRect(snake.x, snake.y, box, box)
  })
}

const moveSnake = () => {
  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if (direction === 'right') snakeX += box
  if (direction === 'left') snakeX -= box
  if (direction === 'up') snakeY -= box
  if (direction === 'down') snakeY += box

  snake.pop()

  const newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead)
}

const updatePosition = (event) => {
  if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right'
  if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left'
  if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up'
  if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down'
}

document.addEventListener('keydown', updatePosition)

const startGame = () => {
  createBackground()
  createSnake()
  moveSnake()
}

setInterval(startGame, 100)
