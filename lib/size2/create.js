module.exports = (width, height) => {
  // affineplane.size2.create(width, height)
  //
  // Create a size2 object.
  //
  // Parameters:
  //   width
  //     a number
  //   height
  //     a number
  //
  // Return
  //   a size2
  //
  return {
    w: Math.abs(width),
    h: Math.abs(height)
  }
}
