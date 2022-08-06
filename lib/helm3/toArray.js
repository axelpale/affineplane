module.exports = function (tr) {
  // affineplane.helm3.toArray(tr)
  //
  // Serializes the transformation into an array representation.
  // Compatible with affineplane.helm3.fromArray.
  //
  // Parameters:
  //   tr
  //     a helm3
  //
  // Return
  //   an array [a, b, x, y, z]
  //
  return [tr.a, tr.b, tr.x, tr.y, tr.z]
}
