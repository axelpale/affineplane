module.exports = (tr, rotation) => {
  // @affineplane.helm3.addRotation(tr, angle)
  //
  // Increase rotation angle of the transformation by an angle.
  // The dilation and translation properties are preserved.
  //
  // Parameters:
  //   tr
  //     a helm3
  //   rotation
  //     a number in radians
  //
  // Return:
  //   a helm3
  //

  // Let us rotate the linear basis with rotation matrix
  //   |cos(r)  sin(r)| |a| = |u  v||a| = | ua + vb |
  //   |sin(r) -cos(r)| |b|   |v -u||b|   | va - ub |
  //
  // This way we do not need to compute the scale.
  const u = Math.cos(rotation)
  const v = Math.sin(rotation)

  return {
    a: u * tr.a + v * tr.b,
    b: v * tr.a + u * tr.b,
    x: tr.x,
    y: tr.y,
    z: tr.z
  }
}
