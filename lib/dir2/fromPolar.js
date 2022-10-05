module.exports = (r) => {
  // affineplane.dir2.fromPolar(r)
  // affineplane.dir2.create
  //
  // Create a new direction from an angle.
  //
  // Parameters
  //   r
  //     a number. The angle in radians.
  //
  // Return
  //   a dir2
  //

  return {
    x: Math.cos(r),
    y: Math.sin(r)
  }
}
