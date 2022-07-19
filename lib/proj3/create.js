module.exports = (a, b, x, y, z) => {
  // affineplane.proj3.create(a, b, x, y, z)
  //
  // Return
  //   a proj3
  //
  return {
    a: a,
    b: b,
    x: x,
    y: y,
    z: z
  }
}
