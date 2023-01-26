// Affine geometry example.
//
// Here we give an example for point2 and herm2 geometries.
//
//

const affineplane = require('../../index')
const box2 = affineplane.box2

// Setup

console.log('script startup')

const canvas = document.querySelector('canvas')

// Drawing tools

const drawPoint = (ctx, p) => {
  // Draw point on canvas
  ctx.fillStyle = 'white'
  ctx.fillRect(p.x - 5, p.y - 5, 10, 10)
}

const drawBox = (ctx, box, color) => {
  // Draw rectangle on canvas
  //
  ctx.save()
  // Style
  ctx.strokeStyle = color
  ctx.lineWidth = 2
  // Placement
  ctx.translate(box.x, box.y)
  ctx.rotate(box2.getAngle(box))
  // Draw
  ctx.strokeRect(0, 0, box.w, box.h)
  // Revert settings
  ctx.restore()
}

const drawAll = (ctx) => {
  const w = canvas.width
  const h = canvas.height

  const center = {
    x: Math.round(w / 2),
    y: Math.round(h / 2)
  }

  const boxes = [
    { a: 1, b: 0, x: 100, y: 200, w: 100, h: 60 },
    { a: 0.4, b: 0.9165, x: 400, y: 230, w: 160, h: 30 },
    { a: 1, b: 0, x: 350, y: 400, w: 80, h: 80 },
  ]

  // Boxes to enclose
  boxes.forEach((box) => {
    drawBox(ctx, box, 'white')
  })

  const boundBox = box2.getMinimumBounds(boxes)
  drawBox(ctx, boundBox, 'yellow')
}

// Main

if (canvas.getContext) {
  const ctx = canvas.getContext('2d')
  drawAll(ctx)
} else {
  console.error('No canvas context available')
}
