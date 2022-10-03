const angleModulo = require('../angle/modulo')

module.exports = (r) => {
  // affineplane.dir2.create(r)
  //
  // Create a new direction. Angles outside ]-π,π] are mapped
  // within the limits with modulus operators.
  //
  // Parameters
  //   r
  //     a number. The angle in radians.
  //
  // Return
  //   a number. The angle in radians between ]-PI, +PI]
  //

  return angleModulo(r)
}
