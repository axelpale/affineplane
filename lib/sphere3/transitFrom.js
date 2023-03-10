const getScale = require('../plane3/getScale')

module.exports = (sphere, source) => {
  // @affineplane.sphere3.transitFrom(sphere, source)
  //
  // Transit a sphere3 from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   sphere
  //     a sphere3 on the source plane.
  //   source
  //     a plane3, the source plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a sphere3, represented on the reference plane.
  //
  const scale = getScale(source)
  return {
    x: source.a * sphere.x - source.b * sphere.y + source.x,
    y: source.b * sphere.x + source.a * sphere.y + source.y,
    z: scale * sphere.z + source.z,
    r: scale * sphere.r
  }
}
