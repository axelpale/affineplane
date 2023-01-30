const epsilon = require('../epsilon')

module.exports = (v, w) => {
  // @affineplane.vec3.projectToVector(v, w)
  //
  // Project a vector onto the line specified by another vector.
  // In other words, get the component of a vector that is
  // parallel with another vector.
  //
  // Parameters:
  //   v
  //     a vec3 to be projected.
  //   w
  //     a vec3, defines the line to project to.
  //
  // Return
  //   a vec3, parallel with w.
  //

  const vdotw = v.x * w.x + v.y * w.y + v.z * w.z
  const wdotw = w.x * w.x + w.y * w.y + w.z * w.z

  // If w zero, assume perpendicular, thus return zero.
  if (wdotw < epsilon) {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  }

  const scalar = vdotw / wdotw

  return {
    x: w.x * scalar,
    y: w.y * scalar,
    z: w.z * scalar
  }
}
