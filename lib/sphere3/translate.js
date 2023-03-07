module.exports = (c, vec) => {
  // @affineplane.sphere3.translate(c, vec)
  //
  // Translate the sphere by the vector. Does not affect radius.
  // See affineplane.sphere3.offset to translate by scalars.
  //
  // Parameters:
  //   c
  //     a sphere3
  //   vec
  //     a vec3
  //
  // Return
  //   a sphere3
  //
  return {
    x: c.x + vec.x,
    y: c.y + vec.y,
    z: c.z + vec.z,
    r: c.r
  }
}
