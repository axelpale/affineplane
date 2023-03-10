module.exports = (box, dx, dy, dz) => {
  // @affineplane.box3.translateBy(box, dx, dy, dz)
  //
  // Move the box along x, y, and/or z axis by the given amounts.
  //
  // Parameters:
  //   box
  //     a box3
  //   dx
  //     a number
  //   dy
  //     a number
  //   dz
  //     a number
  //
  // Return
  //   a box3
  //
  return {
    a: box.a,
    b: box.b,
    x: box.x + dx,
    y: box.y + dy,
    z: box.z + dz,
    w: box.w,
    h: box.h,
    d: box.d
  }
}
