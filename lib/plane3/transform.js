module.exports = function (plane, tr) {
  // affineplane.plane3.transform(plane, tr)
  //
  // Transform the plane with a helmert transformation.
  // Basically, the plane is a transformation from its internal
  // coordinate system to the reference coordinate system.
  // The returned plane is the result when the plane matrix
  // is multiplied from left by the given transform matrix.
  // For multiplication from right, see affineplane.plane3.compose.
  //
  // Parameters:
  //   plane
  //     a plane3 in the reference space
  //   tr
  //     a helm2 or helm3 in the reference space
  //
  // Return
  //   a plane3 in the reference space
  //

  // For reading aid:
  //   |a -b  0  x|   |a -b  0  x|
  //   |b  a  0  y| * |b  a  0  y|
  //   |0  0  1  z|   |0  0  1  z|
  //   |0  0  0  1|   |0  0  0  1|
  //
  return {
    a: tr.a * plane.a - tr.b * plane.b,
    b: tr.a * plane.b + tr.b * plane.a,
    x: tr.a * plane.x - tr.b * plane.y + tr.x,
    y: tr.b * plane.x + tr.a * plane.y + tr.y,
    z: plane.z + (tr.z ? tr.z : 0)
  }
}
