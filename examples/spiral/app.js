// Affine geometry example.
//
// Here we give an example for point2 and herm2 geometries.
//
//

const affineplane = require('../../index')

// Setup

console.log('script startup')

const canvas = document.querySelector('canvas')

// Drawing tools

const drawPoint = (ctx, p) => {
  // Draw point on canvas
  ctx.fillStyle = 'white'
  ctx.fillRect(p.x - 5, p.y - 5, 10, 10)
}

const drawAll = (ctx) => {
  const w = canvas.width
  const h = canvas.height

  const c = {
    x: Math.round(w / 2),
    y: Math.round(h / 2)
  }

  let p = affineplane.point2.offset(c, 5, 0)

  // Create a helmert transformation
  let tr = affineplane.helm2.I
  tr = affineplane.helm2.rotateBy(tr, c, Math.PI / 6)
  tr = affineplane.helm2.scaleBy(tr, c, Math.pow(1.618033, 1 / 5))

  for (let i = 0; i < 200; i += 1) {
    p = affineplane.point2.transform(p, tr)
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
