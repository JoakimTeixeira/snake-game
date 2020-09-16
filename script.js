/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const box = 32
const snake = []

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

createBackground()
createSnake()
