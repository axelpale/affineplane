// Affine geometry example

const affineplane = require('../../index')
const loadimages = require('loadimages')

// Setup

console.log('script startup')
const canvas = document.querySelector('canvas')

// Drawing tools

const drawPoint = (ctx, p) => {
  ctx.fillStyle = 'white'
  ctx.fillRect(p.x - 5, p.y - 5, 10, 10)
}

const drawBranch = (ctx, p0, p1, canvasRect, branchImg) => {
  const imgWidth = branchImg.width
  const imgHeight = branchImg.height

  const branchPlane = affineplane.plane2.IDENTITY
  const branchSize = affineplane.size2.create(imgWidth, imgHeight)
  let branchRect = affineplane.box2.create(branchPlane, branchSize)

  affineplane.plane2.estimate({
    source: [
      affineplane.box2.atNorm(branchRect, 0.5, 0),
      affineplane.box2.atNorm(branchRect, 0.5, 1)
    ],
    target: [
      // TODO
    ]
  })
  branchRect = plane.rectangle.transform

  const imgSize = {
    w: imgWidth,
    h: imgHeight
  }

  plane.formation.create()
  plane.rectangle.create()

  let tr = plane.transform.I
  tr = plane.transform.rotateBy(tr, c, Math.PI / 5)
  ctx.setTransform(plane.transform.toMatrix(tr))
  ctx.drawImage(branchImg, 0, 0)
  ctx.resetTransform()
}

const drawAll = (ctx, images) => {

  // Canvas
  const canvasRect = plane.rectangle.create(0, 0, canvas.width, canvas.height)

  // Begin tree at
  const p0 = plane.rectangle.atBottomMid(canvasRect)

  // Growing step
  const v0 = plane.vector.fromPolar(200, -Math.PI / 2)

  const p1 = plane.point.translate(p0, v0)
  const p2 = plane.point.translate(p1, v0)

  const branchImg = images[0]

  drawBranch(ctx, p0, p1, branchImg)

  // MAYBE FUTURE
  // let rect = plane.rectangle.create()
  // rect = plane.rectangle.rotateBy(rect)
}

const main = (err, images) => {
  if (err) {
    console.error(err)
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    drawAll(ctx, images)
  } else {
    console.error('No canvas context available')
  }
}

// Preload images
loadimages(['branch.png'], main)
