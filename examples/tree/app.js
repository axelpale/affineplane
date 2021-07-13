// Affine geometry example

const plane = require('../index')

// Setup

console.log('script startup')
const canvas = document.querySelector('canvas')

// Drawing tools

const drawPoint = (ctx, p) => {
  ctx.fillStyle = 'white'
  ctx.fillRect(p.x - 5, p.y - 5, 10, 10)
}

const drawBranch = (ctx, tr) => {
  ctx.setTransform(plane.transform.toMatrix(tr))
  ctx.drawImage(branch, 0, 0)
  ctx.resetTransform()
}

const drawAll = (ctx) => {
  const w = canvas.width
  const h = canvas.height

  const c = {
    x: Math.round(w / 2),
    y: Math.round(h / 2)
  }

  let p = plane.point.offset(c, 5, 0)

  let tr = plane.transform.I
  tr = plane.transform.rotateBy(tr, c, Math.PI / 6)
  tr = plane.transform.scaleBy(tr, c, Math.pow(1.618033, 1 / 5))

  for (let i = 0; i < 200; i += 1) {
    p = plane.point.transform(p, tr)
    drawPoint(ctx, p)
  }
}

// Main

if (canvas.getContext) {
  const ctx = canvas.getContext('2d')
  drawAll(ctx)
} else {
  console.error('No canvas context available')
}
