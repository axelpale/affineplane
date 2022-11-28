module.exports = (vec) => {
  // affineplane.helm2.fromVector(vec)
  //
  // Create a helm2 transformation from a translation vector.
  //
  // Parameters:
  //   vec
  //     a vec2, the displacement vector
  //
  // Return:
  //   a helm2
  //
  return {
    a: 1,
    b: 0,
    x: vec.x,
    y: vec.y
  }
}
