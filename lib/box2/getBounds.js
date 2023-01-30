const at = require('./at')

module.exports = (boxes) => {
  // @affineplane.box2.getBounds(boxes)
  //
  // Get outer rectangular boundary of the given box or boxes. In other words,
  // compute such a box that has no rotation and no dilation with respect to
  // the reference basis but has translation and size so that it covers
  // the given box or boxes.
  //
  // Parameters
  //   boxes
  //     a box2, in the reference basis.
  //     array of box2, each in the reference basis.
  //
  // Return
  //   a box2, in the reference basis.
  //

  // Normalize to array
  if (!Array.isArray(boxes)) {
    if (!boxes) {
      throw new Error('Invalid argument: boxes')
    }
    boxes = [boxes]
  }

  if (boxes.length === 0) {
    throw new Error('Invalid argument: boxes is empty array')
  }

  // Find min and max along x and y.
  let minx = Infinity
  let maxx = -Infinity
  let miny = Infinity
  let maxy = -Infinity

  const corners = []
  for (let i = 0; i < boxes.length; i += 1) {
    // Due to rotation, we cannot assume which corner is topmost or so.
    // Still, because rectangle is a convex shape, we know that if all its
    // corners are inside another rectangle, it is compeltely inside it.
    // Thus we can find the bounding box from the set of corner points.
    const box = boxes[i]
    // Corners are point2 in the reference basis.
    corners.push(at(box, 0, 0))
    corners.push(at(box, box.w, 0))
    corners.push(at(box, 0, box.h))
    corners.push(at(box, box.w, box.h))
  }

  for (let j = 0; j < corners.length; j += 1) {
    const x = corners[j].x
    const y = corners[j].y

    minx = Math.min(x, minx)
    maxx = Math.max(x, maxx)
    miny = Math.min(y, miny)
    maxy = Math.max(y, maxy)
  }

  // Construct the bounding rect.
  return { a: 1, b: 0, x: minx, y: miny, w: maxx - minx, h: maxy - miny }
}
