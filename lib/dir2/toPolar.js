module.exports = (dir) => {
  // affineplane.dir2.toPolar(dir)
  // affineplane.dir2.toAngle
  //
  // Get the direction as angle around z-axis measured from positive x-axis.
  //
  // Parameters:
  //   dir
  //     a dir2 object or unit vec2.
  //
  // Return
  //   a number, an angle in radians in ]-π, π].
  //
  return Math.atan2(dir.y, dir.x)
}
