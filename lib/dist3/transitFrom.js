const getScale = require('../plane3/getScale')

module.exports = (dist, source) => {
  // affineplane.dist3.transitFrom(dist, source)
  //
  // Transit a distance from the source basis
  // to the reference basis.
  //
  // Parameters:
  //   dist
  //     a dist3, represented in the source basis.
  //   source
  //     a plane3, the source basis, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a dist3, represented in the reference basis.
  //

  // Thought experiment: let source plane scale be 2 and
  // a measure on the source plane be 3 units.
  // Each 1 unit on source is 2 units on the reference plane
  // due to scale. Therefore the measure is 6 units on the ref.

  return dist * getScale(source)
}
