module.exports = (points) => {
  // @affineplane.box2.fromPoints(points)
  //
  // Get a rectangular boundary of the given points. In other words,
  // compute such a box that has no rotation and no dilation with respect to
  // the reference basis but has translation and size so that it covers
  // the given points.
  //
  // Parameters
  //   points
  //     array of point2, each in the reference basis.
  //
  // Return
  //   a box2, in the reference basis.
  //

  if (!Array.isArray(points) || points.length === 0) {
    throw new Error('Invalid argument: points')
  }

  // Find min and max along x and y.
  let minx = Infinity
  let maxx = -Infinity
  let miny = Infinity
  let maxy = -Infinity

  for (let j = 0; j < points.length; j += 1) {
    const x = points[j].x
    const y = points[j].y

    minx = Math.min(x, minx)
    maxx = Math.max(x, maxx)
    miny = Math.min(y, miny)
    maxy = Math.max(y, maxy)
  }

  // Construct the bounding rect.
  return { a: 1, b: 0, x: minx, y: miny, w: maxx - minx, h: maxy - miny }
}
