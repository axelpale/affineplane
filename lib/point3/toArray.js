module.exports = (p) => {
  // @affineplane.point3.toArray(p)
  //
  // Get the point3 object as an array.
  // Compatible with affineplane.point3.fromArray.
  //
  // Parameters:
  //   p
  //     a point3
  //
  // Return
  //   an array [x, y, z]
  //
  return [p.x, p.y, p.z]
}
