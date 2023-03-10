const getBasis = require('./getBasis')
const getBasisInverse = require('./getBasisInverse')
const getCircle = require('./getCircle')
const getSegments = require('./getSegments')
const planeCompose = require('../plane2/compose')
const pointTransitFrom = require('../point2/transitFrom')
const collideCircles = require('../sphere2/collide')
const collideSegments = require('../segment2/collide')

const inside = (box, point) => {
  // Test if a point in the box basis is inside the box.
  const px = point.x
  const py = point.y
  return px >= 0 && px <= box.w && py >= 0 && py <= box.h
}

module.exports = function (b, bb) {
  // @affineplane.box2.collide(b, bb)
  //
  // Do two boxes collide?
  //
  // Parameters:
  //   b
  //     a box2, in the reference basis
  //   bb
  //     a box2, in the reference basis
  //
  // Return:
  //   a boolean, true if boxes collide.
  //

  // We can first quickly determine if boxes cannot collide by
  // comparing their bounding spheres. If the spheres do not collide,
  // the boxes cannot collide. If the spheres do collide, we need to
  // test further do the boxes truly collide.

  // Boxes can collide without edges crossing.
  // Think of nested boxes.
  // Also, boxes can collide without any of the corners inside another.
  // Think of two long boards crossed.

  // Therefore we need to check if at least one of the corners is inside
  // the other box, and if not, check if any of the edge segments collide.
  // We need 4x4 segment collision tests.

  // For nested boxes, we need to test if a corner point is inside.
  // We do not know the nesting order, thus test both directions.
  // We need to test only one corner per direction. Alternatively we could
  // test each corner, which would imply 4 transits and 4 tests.

  // Test bounding circle collision
  const bCircle = getCircle(b)
  const bbCircle = getCircle(bb)
  const circleHit = collideCircles(bCircle, bbCircle)
  if (!circleHit) {
    // Bounding circles do not touch, thus we can exit quickly.
    return false
  }
  // Else the circles collide and we need to inspect further.

  // Test if boxes are nested.
  // Form transitions between boxes
  const bToRef = getBasis(b)
  const refToB = getBasisInverse(b)
  const bbToRef = getBasis(bb)
  const refToBb = getBasisInverse(bb)
  // bToBb is a box plane b, represented on the box plane bb.
  const bToBb = planeCompose(refToBb, bToRef)
  // bbToB is a box plane bb, represented on the box plane b.
  const bbToB = planeCompose(refToB, bbToRef)

  // Test if top left corner of box b is inside box bb.
  const corner = { x: 0, y: 0 }
  const cornerInBb = pointTransitFrom(corner, bToBb)
  const cornerInB = pointTransitFrom(corner, bbToB)

  const isInsideBb = inside(bb, cornerInBb)
  const isInsideB = inside(b, cornerInB)

  if (isInsideB || isInsideBb) {
    // Boxes are nested and therefore collide.
    return true
  }
  // Else, boxes are not nested, but still can collide.

  // Test if box segments cross. Any crossing implies collision.
  const segsB = getSegments(b)
  const segsBb = getSegments(bb)
  const len = 4

  let i, j, segb, segbb
  // For each b segment
  for (i = 0; i < len; i += 1) {
    segb = segsB[i]
    // For each bb segment
    for (j = 0; j < len; j += 1) {
      segbb = segsBb[j]
      if (collideSegments(segb, segbb)) {
        return true
      }
    }
  }
  // Segments did not cross.

  return false
}
