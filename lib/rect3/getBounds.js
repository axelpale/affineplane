const atNorm = require('./atNorm')

module.exports = (rect) => {
  // @affineplane.rect2.getBounds(rect)
  //
  // Get outer bounds of the given rect. In other words,
  // return a rectangle with no rotation and no dilation with respect to
  // the reference basis but has translation and size so that it covers
  // the given rectangle.
  //
  // Parameters
  //   rect
  //     a rect2, on the reference basis.
  //
  // Return
  //   a rect2, on the reference basis.
  //

  // Get corner points on the reference basis.
  const corners = [
    atNorm(rect, 0, 0),
    atNorm(rect, 1, 0),
    atNorm(rect, 1, 1),
    atNorm(rect, 0, 1)
  ]
  const n = 4

  // Find min and max along x and y.
  let minx = null
  let maxx = null
  let miny = null
  let maxy = null
  for (let i = 0; i < n; i += 1) {
    const x = corners[i].x
    const y = corners[i].y
    if (minx === null) {
      minx = x
    } else {
      minx = Math.min(x, minx)
    }
    if (maxx === null) {
      maxx = x
    } else {
      maxx = Math.max(x, maxx)
    }
    if (miny === null) {
      miny = y
    } else {
      miny = Math.min(y, miny)
    }
    if (maxy === null) {
      maxy = y
    } else {
      maxy = Math.max(y, maxy)
    }
  }

  // Preserve z coordinate.
  const prez = rect.basis.z

  // Construct the bounding rect.
  return {
    basis: { a: 1, b: 0, x: minx, y: miny, z: prez },
    size: {
      w: maxx - minx,
      h: maxy - miny
    }
  }
}
