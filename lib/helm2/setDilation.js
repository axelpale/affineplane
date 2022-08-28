module.exports = (tr, dilation) => {
  // affineplane.helm2.setDilation(tr, dilation)
  //
  // Replace scaling of the transformation.
  // The rotation and translation properties are preserved.
  //
  // Parameters:
  //   tr
  //     a helm2
  //   dilation
  //     a number
  //
  // Return:
  //   a helm2
  //
  const rot = Math.atan2(tr.b, tr.a)
  return {
    a: dilation * Math.cos(rot),
    b: dilation * Math.sin(rot),
    x: tr.x,
    y: tr.y
  }
}
