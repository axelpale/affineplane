module.exports = (magnitude, direction) => {
  // Parameters
  //   magnitude
  //     number
  //   direction
  //     number, angle in radians
  //
  // Return
  //   a vector
  //
  return {
    x: magnitude * Math.cos(direction),
    y: magnitude * Math.sin(direction)
  }
}
