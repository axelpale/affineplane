const max = 2 * Math.PI

module.exports = (r) => {
  // affineplane.dir2.create
  //
  // Create a new direction.
  //
  // Parameters
  //   r
  //     a number. The angle in radians.
  //
  // Return
  //   a number. The angle in radians between -Pi and +Pi.
  //

  // JS modulo sign equals the sign of the dividend.
  // Therefore a special treatment is in order to ensure
  // positive values.
  return ((r + Math.PI) % max + max) % max - Math.PI
}
