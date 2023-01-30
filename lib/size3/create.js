module.exports = (width, height, depth) => {
  // @affineplane.size3.create(width, height, depth)
  //
  // Create a size3 object.
  //
  // Parameters:
  //   width
  //     a number
  //   height
  //     a number
  //   depth
  //     a number
  //
  // Return
  //   a size3
  //
  return {
    w: Math.abs(width),
    h: Math.abs(height),
    d: Math.abs(depth)
  }
}
