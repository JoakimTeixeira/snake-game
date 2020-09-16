/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const box = 32

const createBackground = () => {
  context.fillStyle = 'lightgreen'
  // fillRect(x, y, width, height)
  context.fillRect(0, 0, 16 * box, 16 * box)
}

createBackground()
