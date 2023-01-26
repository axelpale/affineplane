const getScale = require('../plane2/getScale')

module.exports = (plane, size) => {
  // affineplane.box2.create(plane, size)
  //
  // Create a box2 object.
  //
  // Parameters:
  //   plane
  //     a plane2 on the reference basis.
  //     .. Defines the box origin and orientation.
  //     .. Scale is defaulted to 1.
  //   size
  //     a size2 on the reference basis.
  //     .. Defines the box size.
  //
  // Return
  //   a box2
  //

  const scale = getScale(plane)

  return {
    a: plane.a / scale,
    b: plane.b / scale,
    x: plane.x,
    y: plane.y,
    w: Math.abs(size.w),
    h: Math.abs(size.h)
  }
}
