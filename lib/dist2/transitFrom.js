const getScale = require('../plane2/getScale')

module.exports = (dist, source) => {
  // affineplane.dist2.transitFrom(dist, source)
  //
  // Transit a distance from the source basis
  // to the reference basis.
  //
  // Parameters:
  //   dist
  //     a number, a dist2 distance measure in the source basis.
  //   source
  //     a plane2, the source plane, represented
  //     .. in the reference basis.
  //
  // Return:
  //   a number, a dist2, represented on the reference basis.
  //

  // Thought experiment: let source plane scale be 2 and
  // a measure on the source plane be 3 units.
  // Each 1 unit on source is 2 units on the reference plane
  // due to scale. Therefore the measure is 6 units on the ref.

  return dist * getScale(source)
}
