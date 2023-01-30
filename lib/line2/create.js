module.exports = (origin, span) => {
  // @affineplane.line2.create(origin, span)
  //
  // Create a line from an origin point and a spanning vector.
  //
  // Parameters:
  //   origin
  //     a point2
  //   span
  //     a vec2, the line spanning vector.
  //     .. Defines the unit on the line.
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
