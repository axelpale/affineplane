module.exports = (points) => {
  // @affineplane.box3.fromPoints(points)
  //
  // Get a cuboid boundary of the given points. In other words,
  // compute such a 3D box that has no rotation and no dilation with respect to
  // the reference basis but has translation and size so that it encloses
  // the given points.
  //
  // Parameters
  //   points
  //     array of point3, each in the reference basis.
  //
  // Return
  //   a box3, in the reference basis.
  //

  if (!Array.isArray(points) || points.length === 0) {
    throw new Error('Invalid argument: points')
  }

  // Find min and max along x, y, z.
  let minx = Infinity
  let maxx = -Infinity
  let miny = Infinity
  let maxy = -Infinity
  let minz = Infinity
  let maxz = -Infinity

  for (let j = 0; j < points.length; j += 1) {
    const x = points[j].x
    const y = points[j].y
    const z = points[j].z

    minx = Math.min(x, minx)
    maxx = Math.max(x, maxx)
    miny = Math.min(y, miny)
    maxy = Math.max(y, maxy)
    minz = Math.min(z, minz)
    maxz = Math.max(z, maxz)
  }

  // Construct the bounding rect.
  return {
    a: 1,
    b: 0,
    x: minx,
    y: miny,
    z: minz,
    w: maxx - minx,
    h: maxy - miny,
    d: maxz - minz
  }
}
