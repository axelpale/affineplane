module.exports = (plane, size) => {
  // affineplane.box2.create(plane, size)
  //
  // Create a box2 object.
  //
  // Parameters:
  //   plane
  //     a plane2 on the reference basis.
  //     .. Defines the box origin and orientation.
  //   size
  //     a size2 on the reference basis.
  //     .. Defines the box size.
  //
  // Return
  //   a box2
  //
  return {
    a: plane.a,
    b: plane.b,
    x: plane.x,
    y: plane.y,
    w: Math.abs(size.w),
    h: Math.abs(size.h)
  }
}
