// Cube
//
// Affine 3D geometry example.
//
// Here we give an example for point2 and helm2 geometries.
//
//

// Import
// const affineplane = require('affineplane')
const affineplane = require('../../index')
const point2 = affineplane.point2
const point3 = affineplane.point3
const line3 = affineplane.line3

// Setup
console.log('script startup')
const canvas = document.querySelector('canvas')
const w = canvas.width
const h = canvas.height
const center = {
  x: Math.round(w / 2),
  y: Math.round(h / 2),
  z: 0
}
const viewingDistance = 200
const focalLength = 300
const pointSize = 4
const cubeSize = 50

// Drawing tools

const drawPoint = (ctx, p) => {
  // Draw 3D point on canvas.
  // The point is projected into 2D.

  // Project
  const plane = { a: 1, b: 0, x: 0, y: 0, z: focalLength - viewingDistance }
  const camera = { x: center.x, y: center.y, z: -viewingDistance }
  const p2 = point3.projectToPlane(p, plane, camera)

  const half = Math.round(pointSize / 2)
  ctx.fillStyle = 'white'
  ctx.fillRect(p2.x - half, p2.y - half, pointSize, pointSize)
}

const drawLineSegment = (ctx, p, q) => {
  // Use affineplane line3 to iterate along a line.
  const line = line3.fromPoints(p, q)

  for (let i = 0; i < 10; i += 1) {
    const at = line3.at(line, i * 0.1)
    drawPoint(ctx, at)
  }
}

const drawCube = (ctx, p, size) => {
  // Drag cube at point p.
  //
  // Parameters:
  //   ctx: canvas drawing context
  //   p: point2, the center of the cube.
  //   size: number, the length of the cube edge.
  //
  const u = size / 2 // unit
  const p000 = point3.offset(p, -u, -u, -u)
  const p001 = point3.offset(p, -u, -u, u)
  const p010 = point3.offset(p, -u, u, -u)
  const p011 = point3.offset(p, -u, u, u)
  const p100 = point3.offset(p, u, -u, -u)
  const p101 = point3.offset(p, u, -u, u)
  const p110 = point3.offset(p, u, u, -u)
  const p111 = point3.offset(p, u, u, u)

  // Top
  drawLineSegment(ctx, p000, p001)
  drawLineSegment(ctx, p001, p101)
  drawLineSegment(ctx, p101, p100)
  drawLineSegment(ctx, p100, p000)
  // Bottom
  drawLineSegment(ctx, p010, p011)
  drawLineSegment(ctx, p011, p111)
  drawLineSegment(ctx, p111, p110)
  drawLineSegment(ctx, p110, p010)
  // Pillars
  drawLineSegment(ctx, p000, p010)
  drawLineSegment(ctx, p001, p011)
  drawLineSegment(ctx, p101, p111)
  drawLineSegment(ctx, p100, p110)
}

const drawAll = (ctx) => {
  const interval = cubeSize * 2
  drawCube(ctx, center, cubeSize)
  drawCube(ctx, point3.offset(center, -interval, 0, 0), cubeSize)
  drawCube(ctx, point3.offset(center, interval, 0, 0), cubeSize)
}

// Main

if (canvas.getContext) {
  const ctx = canvas.getContext('2d')
  drawAll(ctx)
} else {
  console.error('No canvas context available')
}
