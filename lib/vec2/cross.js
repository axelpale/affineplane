module.exports = (v, w) => {
  // affineplane.vec2.cross(v, w)
  //
  // The magnitude of cross product of two 2D vectors. While in 3D,
  // the cross product returns a perpendicular vector, in 2D we must
  // settle for a scalar result, the length of that 3D vector.
  //
  // Parameters:
  //   v
  //     a vec2
  //   w
  //     a vec2
  //
  // Return
  //   a number
  //
  return v.x * w.y - v.y * w.x
}
