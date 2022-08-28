module.exports = (tr, rotation) => {
  // affineplane.helm3.setRotation(tr, angle)
  //
  // Replace rotation angle of the transformation.
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
  const scale = Math.sqrt(tr.a * tr.a + tr.b * tr.b)
  return {
    a: scale * Math.cos(rotation),
    b: scale * Math.sin(rotation),
    x: tr.x,
    y: tr.y,
    z: tr.z
  }
}
