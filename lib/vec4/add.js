module.exports = (v, w) => {
  // affineplane.vec4.add(v, w)
  //
  // Add two quaternions together via vector addition.
  //
  // Parameters:
  //   v
  //     a vec4
  //   w
  //     a vec4
  //
  // Return
  //   a vec4
  //
  return {
    r: v.r + w.r,
    x: v.x + w.x,
    y: v.y + w.y,
    z: v.z + w.z
  }
}
