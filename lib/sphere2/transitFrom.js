const getScale = require('../plane2/getScale')

module.exports = (sphere, source) => {
  // @affineplane.sphere2.transitFrom(sphere, source)
  //
  // Transit a sphere2 from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   sphere
  //     a sphere2 on the source plane.
  //   source
  //     a plane2, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a sphere2, represented on the reference plane.
  //
  return {
    x: source.a * sphere.x - source.b * sphere.y + source.x,
    y: source.b * sphere.x + source.a * sphere.y + source.y,
    r: sphere.r * getScale(source)
  }
}
