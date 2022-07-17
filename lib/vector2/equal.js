module.exports = (v, w) => {
  // affineplane.vector2.equal(v, w)
  // Test if vectors v,w are equal
  //
  // Parameters
  //   v
  //     a vector2
  //   w
  //     a vector2
  //
  // Return
  //   a boolean
  //
  return v.x === w.x && v.y === w.y
}
