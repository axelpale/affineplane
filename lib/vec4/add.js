module.exports = (v, w) => {
  // affineplane.vec4.add(v, w)
  //
  // Add two vectors together via component-wise addition.
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
    x: v.x + w.x,
    y: v.y + w.y,
    z: v.z + w.z,
    w: v.w + w.w
  }
}
