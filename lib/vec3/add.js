module.exports = (v, w) => {
  // affineplane.vec3.add(v, w)
  //
  // Parameters:
  //   v
  //     a vec3
  //   w
  //     a vec3
  //
  // Return
  //   a vec3
  //
  return {
    x: v.x + w.x,
    y: v.y + w.y,
    z: v.z + w.z
  }
}
