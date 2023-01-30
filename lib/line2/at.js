module.exports = (line, c) => {
  // @affineplane.line2.at(line, c)
  //
  // Get a point on the line at position c from the line origin.
  // For example c=2 gives a point at two spanning vectors away
  // from the origin.
  //
  // Parameters:
  //   line
  //     a line2
  //   c
  //     a number, one-dimensional coordinate along the line
  //
  // Return:
  //   a point2
  //
  return {
    x: line.origin.x + c * line.span.x,
    y: line.origin.y + c * line.span.y
  }
}
