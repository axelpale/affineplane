module.exports = (tr, vec) => {
  // @affineplane.helm3.setTranslation(tr, vec)
  //
  // Replace translation property of the transformation.
  // The dilation and rotation properties are preserved.
  //
  // Parameters:
  //   tr
  //     a helm3
  //   vec
  //     a vec3, the new translation vector
  //
  // Return:
  //   a helm3
  //
  return {
    a: tr.a,
    b: tr.b,
    x: vec.x,
    y: vec.y,
    z: vec.z
  }
}
