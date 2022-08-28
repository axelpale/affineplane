module.exports = function (plane, tr) {
  // affineplane.plane2.transform(plane, tr)
  //
  // Transform the plane with a helmert transformation.
  // Basically, the plane is a transformation from its internal
  // coordinate system to the reference coordinate system.
  // The returned plane is the result when the plane matrix
  // is multiplied from left by the given transform matrix.
  // For multiplication from right, see affineplane.plane2.compose.
  //
  // Parameters:
  //   plane
  //     a plane2 on the reference plane
  //   tr
  //     a helm2 on the reference plane
  //
  // Return
  //   a plane2 on the reference plane
  //

  // For reading aid:
  //   |a -b  x|   |a -b  x|
  //   |b  a  y| * |b  a  y|
  //   |0  0  1|   |0  0  1|
  //
  return {
    a: tr.a * plane.a - tr.b * plane.b,
    b: tr.a * plane.b + tr.b * plane.a,
    x: tr.a * plane.x - tr.b * plane.y + tr.x,
    y: tr.b * plane.x + tr.a * plane.y + tr.y
  }
}
