module.exports = (line) => {
  // @affineplane.line2.normal(line)
  //
  // Get a normal vector for the line. It is perpendicular to the line.
  // Note that a line has two normal vectors, one for each side.
  // The returned normal is the one at the right hand.
  //
  // Parameters:
  //   line
  //     a line2
  //
  // Return
  //   a vec2, a vector perpendicular to the line.
  //
  return {
    x: -line.span.y,
    y: line.span.x
  }
}
