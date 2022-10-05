module.exports = function (plane, tr) {
  // affineplane.plane3.transform(plane, tr)
  // affineplane.plane3.transformBy
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
  //   |a -b  0  x|   |s -r  0  i|
  //   |b  a  0  y| * |r  s  0  j|
  //   |0  0  n  z|   |0  0  m  k|
  //   |0  0  0  1|   |0  0  0  1|
  //
  const ta = tr.a
  const tb = tr.b
  const tm = Math.sqrt(ta * ta + tb * tb)
  return {
    a: ta * plane.a - tb * plane.b,
    b: ta * plane.b + tb * plane.a,
    x: ta * plane.x - tb * plane.y + tr.x,
    y: tb * plane.x + ta * plane.y + tr.y,
    z: tm * plane.z + (tr.z ? tr.z : 0)
  }
}
