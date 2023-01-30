module.exports = (v, w) => {
  // @affineplane.vec2.equal(v, w)
  //
  // Test if vectors v,w are equal
  //
  // Parameters
  //   v
  //     a vec2
  //   w
  //     a vec2
  //
  // Return
  //   a boolean
  //
  return v.x === w.x && v.y === w.y
}
