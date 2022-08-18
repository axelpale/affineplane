module.exports = (origin, span) => {
  // Create a line from origin point and unit vector.
  //
  // Parameters:
  //   origin
  //     a point2
  //   span
  //     a vec2, the line spanning vector.
  //     .. Sets the unit on the line.
  //
  // Return
  //   a line2
  //
  return {
    span: {
      x: span.x,
      y: span.y
    },
    origin: {
      x: origin.x,
      y: origin.y
    }
  }
}
