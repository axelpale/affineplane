const getScale = require('../plane3/getScale')

module.exports = (dist, source) => {
  // affineplane.dist3.transitFrom(dist, source)
  //
  // Transit a distance from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   dist
  //     a number, a dist3 distance measure on the source plane.
  //   source
  //     a plane3, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a number, a dist3, represented on the reference plane.
  //

  // Thought experiment: let source plane scale be 2 and
  // a measure on the source plane be 3 units.
  // Each 1 unit on source is 2 units on the reference plane
  // due to scale. Therefore the measure is 6 units on the ref.

  return dist * getScale(source)
}
