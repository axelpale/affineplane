const getMinimumBounds = require('../box2/getMinimumBounds')

module.exports = (boxes) => {
  // @affineplane.box3.getMinimumBounds(boxes)
  //
  // Find approximate minimum bounding box.
  // Such a box contains all the given set of boxes.
  // The orientation of the resulting bounding box (on xy-plane) is selected so
  // that the box volume is minimal. Thus the orientation is not necessarily
  // parallel with the reference basis.
  //
  // Parameters:
  //   boxes
  //     array of box3
  //
  // Return
  //   a box3
  //

  // Normalize to array
  if (!Array.isArray(boxes)) {
    if (!boxes) {
      throw new Error('Invalid argument: boxes')
    }
    boxes = [boxes]
  }

  // We are limited to rotation on xy-plane.
  // Thus we can reuse box2 methods.
  const b = getMinimumBounds(boxes)

  // Find z boundary.
  let minz = Infinity
  let maxz = -Infinity
  for (let i = 0; i < boxes.length; i += 1) {
    const box = boxes[i]
    const front = box.z
    const back = box.z + box.d

    minz = Math.min(front, minz)
    maxz = Math.max(back, maxz)
  }

  // Build finished boundary by patching the 2D box.
  b.z = minz
  b.d = maxz - minz

  return b
}
