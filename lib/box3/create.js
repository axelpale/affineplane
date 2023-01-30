module.exports = (basis, size) => {
  // @affineplane.box3.create(basis, size)
  //
  // Create a box3 object.
  //
  // Parameters:
  //   basis
  //     a plane3 on the reference basis.
  //     .. Defines the box origin and orientation.
  //   size
  //     a size3 on the reference basis.
  //     .. Defines the box size.
  //
  // Return
  //   a box3
  //
  return {
    a: basis.a,
    b: basis.b,
    x: basis.x,
    y: basis.y,
    z: basis.z,
    w: Math.abs(size.w),
    h: Math.abs(size.h),
    d: Math.abs(size.d)
  }
}
