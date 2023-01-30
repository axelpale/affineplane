const epsilon = require('../epsilon')

module.exports = (v, w) => {
  // @affineplane.vec2.projectToVector(v, w)
  //
  // Project a vector onto the line specified by another vector.
  // In other words, get the component of a vector that is
  // parallel with another vector.
  //
  // Parameters:
  //   v
  //     a vec2 to be projected.
  //   w
  //     a vec2, defines the line to project to.
  //
  // Return
  //   a vec2, parallel with w.
  //

  // example: proj (3,4) to (0,-1)
  const vdotw = v.x * w.x + v.y * w.y // 3*0 + 4*(-1) = -4
  const wdotw = w.x * w.x + w.y * w.y // 0*0 + (-1)*(-1) = 1

  // If w zero, assume perpendicular, thus return zero.
  if (wdotw < epsilon) {
    return {
      x: 0,
      y: 0
    }
  }

  const scalar = vdotw / wdotw // -4

  return {
    x: w.x * scalar, // 0*(-4) = 0
    y: w.y * scalar // (-1)*(-4) = 4
  }
}
