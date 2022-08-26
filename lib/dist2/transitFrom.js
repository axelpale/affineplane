const getScale = require('../plane2/getScale')

module.exports = (dist, source) => {
  // affineplane.dist2.transitFrom(dist, source)
  //
  // Transit a distance from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   dist
  //     a number, a dist2 distance measure on the source plane.
  //   source
  //     a plane2, the source plane, represented
  //     on the reference plane.
  //
  // Return:
  //   a number, a dist2, represented on the reference plane.
  //

  // Thought experiment: let source plane scale be 2 and
  // a measure on the source plane be 3 units.
  // Each 1 unit on source is 2 units on the reference plane
  // due to scale. Therefore the measure is 6 units on the ref.

  return dist * getScale(source)
}
