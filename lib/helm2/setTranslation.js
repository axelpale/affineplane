module.exports = (tr, vec) => {
  // @affineplane.helm2.setTranslation(tr, vec)
  //
  // Replace translation property of the transformation.
  // The dilation and rotation properties are preserved.
  //
  // Parameters:
  //   tr
  //     a helm2
  //   vec
  //     a vec2, the new translation vector
  //
  // Return:
  //   a helm2
  //
  return {
    a: tr.a,
    b: tr.b,
    x: vec.x,
    y: vec.y
  }
}
