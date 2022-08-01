module.exports = (v, w) => {
  // affineplane.vec3.equal(v, w)
  //
  // Test if vectors v, w are equal in value.
  //
  // Parameters
  //   v
  //     a vec3
  //   w
  //     a vec3
  //
  // Return
  //   a boolean, true if equal
  //
  return v.x === w.x && v.y === w.y && v.z === w.z
}
