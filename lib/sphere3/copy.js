module.exports = (p) => {
  // @affineplane.sphere3.copy(p)
  //
  // Copy a sphere object.
  //
  // Parameters
  //   p
  //     a sphere3
  //
  // Return
  //   a sphere3
  //
  return {
    x: p.x,
    y: p.y,
    z: p.z,
    r: p.r
  }
}
