const transformMany = require('../point2/transformMany')
const createTransform = require('../helm2/fromFeatures')
const composeTransform = require('../helm2/compose')
const at = require('./at')
const fromPoints = require('./fromPoints')
const getArea = require('./getArea')

// Precompute rotation matrix
const sectors = 12
const identity = createTransform()
const rotation = createTransform({ rotation: Math.PI * sectors / 2 })

module.exports = (boxes) => {
  // affineplane.box2.getMinimumBounds(boxes)
  //
  // Find minimum bounding box aka minimum area rectangle (MAR) that
  // contains all the given set of boxes. The orientation of the resulting
  // bounding box is not necessarily parallel with the reference basis.
  //
  // Parameters:
  //   boxes
  //     array of box2
  //
  // Return
  //   a box2
  //

  // There is the Chan's algorithm but it can be complicated to implement.
  // Based on convex geometry.

  // We can do poor man's version that gives approximate result.
  // - get box corners
  // - rotate degrees
  // - pick rotation that gave smallest area.
  // Adapted from Bryan Tarpley's rotation algorithm in Stratocumulus.

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
  let minArea = Infinity
  let minBox = null
  let minRotation = rotation
  let iterRotation = identity
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

  // Pick winner
  return {
    // Stored minimal box has correct orientation and size but
    // its translation is off.
    a: minBox.a,
    b: minBox.b,
    x: 0, // TODO
    y: 0, // TODO
    w: minBox.w,
    h: minBox.h
  }
}
