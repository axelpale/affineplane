module.exports = (line, c) => {
  // @affineplane.line3.at(line, c)
  //
  // Get a point on the line at position c from the line origin.
  // For example c=2 gives a point at two spanning vectors away
  // from the origin.
  //
  // Parameters:
  //   line
  //     a line3
  //   c
  //     a number
  //
  // Return:
  //   a point3
  //
  return {
    x: line.origin.x + c * line.span.x,
    y: line.origin.y + c * line.span.y,
    z: line.origin.z + c * line.span.z
  }
}
