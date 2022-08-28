module.exports = (origin, span) => {
  // affineplane.line3.create(origin, span)
  //
  // Create a 3d line from origin point and unit vector.
  //
  // Parameters:
  //   origin
  //     a point3
  //   span
  //     a vec3, the line spanning vector.
  //     .. Sets the unit on the line.
  //
  // Return
  //   a line3
  //
  return {
    span: {
      x: span.x,
      y: span.y,
      z: span.z
    },
    origin: {
      x: origin.x,
      y: origin.y,
      z: origin.z
    }
  }
}
