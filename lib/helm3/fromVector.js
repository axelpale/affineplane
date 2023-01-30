module.exports = (vec) => {
  // @affineplane.helm3.fromVector(vec)
  //
  // Create a helm3 transformation from a translation vector.
  //
  // Parameters:
  //   vec
  //     a vec3, the displacement vector
  //
  // Return:
  //   a helm3
  //
  return {
    a: 1,
    b: 0,
    x: vec.x,
    y: vec.y,
    z: (vec.z ? vec.z : 0) // allow vec2 secretly
  }
}
