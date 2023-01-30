module.exports = (tr, delta) => {
  // @affineplane.helm3.addDilation(tr, delta)
  //
  // Increase the scale multiplier of the transformation by addition.
  // The rotation and translation properties are preserved.
  //
  // Parameters:
  //   tr
  //     a helm3
  //   delta
  //     a number, the increment in scaling.
  //
  // Return:
  //   a helm3
  //
  const rot = Math.atan2(tr.b, tr.a)
  return {
    a: tr.a + delta * Math.cos(rot),
    b: tr.b + delta * Math.sin(rot),
    x: tr.x,
    y: tr.y,
    z: tr.z
  }
}
