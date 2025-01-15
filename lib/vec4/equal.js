module.exports = (v, w) => {
  // @affineplane.vec4.equal(v, w)
  //
  // Test if vectors v, w are equal in value.
  //
  // Parameters
  //   v
  //     a vec4
  //   w
  //     a vec4
  //
  // Return
  //   a boolean, true if equal
  //
  return v.x === w.x && v.y === w.y && v.z === w.z && v.w === w.w
}
