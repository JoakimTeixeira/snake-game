/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const box = 32
const snake = []

// Initial direction
let direction = 'right'
const food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}

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

const createFood = () => {
  context.fillStyle = 'red'
  context.fillRect(food.x, food.y, box, box)
}

const moveSnake = () => {
  handleWallCollision()
  handleSnakeCollision()

  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if (direction === 'right') snakeX += box
  if (direction === 'left') snakeX -= box
  if (direction === 'up') snakeY -= box
  if (direction === 'down') snakeY += box

  handleFoodCollision(snakeX, snakeY)

  const newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead)
}

const updateSnakePosition = (event) => {
  if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right'
  if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left'
  if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up'
  if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down'
}

const handleWallCollision = () => {
  if (snake[0].x > 15 * box && direction === 'right') snake[0].x = -box
  if (snake[0].x < 0 * box && direction === 'left') snake[0].x = 16 * box
  if (snake[0].y < 0 * box && direction === 'up') snake[0].y = 16 * box
  if (snake[0].y > 15 * box && direction === 'down') snake[0].y = -box
}

const handleFoodCollision = (snakeX, snakeY) => {
  if (snakeX !== food.x || snakeY !== food.y) snake.pop()
  else {
    food.x = Math.floor(Math.random() * 15 + 1) * box
    food.y = Math.floor(Math.random() * 15 + 1) * box
  }
}

const handleSnakeCollision = () => {
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      clearInterval(game)
      alert('Game Over!')
      window.location.reload()
    }
  }
}

const startGame = () => {
  createBackground()
  createSnake()
  createFood()
  moveSnake()
}

const game = setInterval(startGame, 100)

document.addEventListener('keydown', updateSnakePosition)
