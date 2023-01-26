const transformOne = require('../point2/transform')
const transformMany = require('../point2/transformMany')
const createTransform = require('../helm2/fromFeatures')
const composeTransform = require('../helm2/compose')
const invertTransform = require('../helm2/invert')
const at = require('./at')
const fromPoints = require('./fromPoints')
const getArea = require('./getArea')

// Set scan range. TODO use binary search?
const sectors = 12
const range = Math.PI / 2 // box is symmetric, 90 deg is enough
// Precompute rotation matrix.
const identity = createTransform()
const rotation = createTransform({ rotation: range / sectors })
const rotationHalfRange = createTransform({ rotation: -range / 2 })

module.exports = (boxes) => {
  // affineplane.box2.getMinimumBounds(boxes)
  //
  // Find approximate minimum bounding box aka minimum area rectangle (MAR).
  // Such MAR contains all the given set of boxes.
  // The orientation of the resulting bounding box is not necessarily parallel
  // with the reference basis.
  //
  // Parameters:
  //   boxes
  //     array of box2
  //
  // Return
  //   a box2
  //

  // There are efficient closed-form algorithms to find MAR.
  // They are based on finding the convex hull of the enclosed points.
  // For the hull there is Chan's algorithm for efficient computation.
  // However, these can be complicated to implement and may require more
  // computation than simpler algorithms in simple cases.

  // We can do poor man's version that gives approximate result.
  // Adapted from Bryan Tarpley's rotation algorithm in Stratocumulus.
  // - get corner points of all boxes.
  // - rotate points by set degrees.
  // - fit orthogonal bounding box and compute its area.
  // - pick rotation that gave smallest area.

  // Normalize to array
  if (!Array.isArray(boxes)) {
    boxes = [boxes]
  }

  const corners = []
  for (let i = 0; i < boxes.length; i += 1) {
    // Due to rotation, we cannot assume which corner is topmost or so.
    const box = boxes[i]
    // Corners are point2 in the reference basis.
    corners.push(at(box, 0, 0))
    corners.push(at(box, box.w, 0))
    corners.push(at(box, 0, box.h))
    corners.push(at(box, box.w, box.h))
  }

  // For this set of points we try to find minimum area rectangle.
  // We rotate the points until we find the best fit.
  // We search best fit within ±45 degrees.
  let minArea = Infinity
  let minBox = null
  let minRotation = identity
  let iterRotation = rotationHalfRange
  for (let j = 0; j < sectors; j += 1) {
    // Rotate points
    const rotatedCorners = transformMany(corners, iterRotation)
    const box = fromPoints(rotatedCorners)
    const boxArea = getArea(box)
    // Store winner
    if (boxArea < minArea) {
      minArea = boxArea
      minBox = box
      minRotation = iterRotation
    }
    // Advance rotation
    iterRotation = composeTransform(rotation, iterRotation)
  }

  // We need to map the origin back.
  const minOrigin = at(minBox, 0, 0)
  const invMinRotation = invertTransform(minRotation)
  const boundsOrigin = transformOne(minOrigin, invMinRotation)

  // Pick winner
  return {
    a: invMinRotation.a,
    b: invMinRotation.b,
    x: boundsOrigin.x,
    y: boundsOrigin.y,
    w: minBox.w,
    h: minBox.h
  }
}
