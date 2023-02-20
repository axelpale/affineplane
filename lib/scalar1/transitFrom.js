const getScale = require('../plane2/getScale')

module.exports = (scalar, source) => {
  // @affineplane.scalar1.transitFrom(scalar, source)
  //
  // Transit a scalar from the source basis
  // to the reference basis.
  //
  // Parameters:
  //   scalar
  //     a number, a scalar1 in the source basis.
  //   source
  //     a plane2 or plane3, the source basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a number, the same scalar1 but represented in the reference basis.
  //

  // Thought experiment: let source plane scale be 2 and
  // a scalar measure on the source plane be 3 units.
  // Each 1 unit on source is 2 units on the reference plane
  // due to the scale. Therefore the scalar is 6 units on the ref.

  return scalar * getScale(source)
}
