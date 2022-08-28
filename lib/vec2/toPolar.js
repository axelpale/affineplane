module.exports = (v) => {
  // affineplane.vec2.toPolar(v)
  //
  // Get polar coordinates of a vector.
  //
  // Parameters
  //   v
  //     a vec2
  //
  // Return
  //   object, polar coordinates { magnitude, direction } where
  //   ..the direction is an angle in radians.
  //
  return {
    magnitude: Math.sqrt(v.x * v.x + v.y * v.y),
    direction: Math.atan2(v.y, v.x)
  }
}
