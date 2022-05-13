const max = 2 * Math.PI

module.exports = (r) => {
  // Create a new direction. The direction is just a number in radians
  // clockwise from the positive x-axis. The direction is
  // capped between -Pi (inclusive) and Pi (exclusive).
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
