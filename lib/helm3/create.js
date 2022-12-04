module.exports = (a, b, x, y, z) => {
  // affineplane.helm3.create(a, b, x, y, z)
  //
  // Create a new helm3 object.
  //
  // Parameters
  //   a
  //     number, linear transform basis vector element
  //   b
  //     number, linear transform basis vector element
  //   x
  //     number, change in horizontal position
  //   y
  //     number, change in vertical position
  //   z
  //     number, change in depth
  //
  // Return
  //   a helm3
  //
  return { a, b, x, y, z }
}
