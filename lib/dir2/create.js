const max = 2 * Math.PI

module.exports = (r) => {
  // Create a new direction. The direction is just a number in radians,
  // capped between 0 (inclusive) and 2*Pi (exclusive).
  //
  // Parameters
  //   r
  //     a number. The angle in radians.
  //
  // Return
  //   a number. The angle in radians between 0 and 2*Pi, including 0.
  //

  // JS modulo sign equals the sign of the dividend.
  // Therefore a special treatment is in order to ensure
  // positive values.
  return (r % max + max) % max
}
