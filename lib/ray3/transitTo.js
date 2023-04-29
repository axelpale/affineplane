const invert = require('../helm3/invert')
const transitFrom = require('./transitFrom')

module.exports = (ray, basis) => {
  // @affineplane.ray3.transitTo(ray, basis)
  //
  // Represent the ray in another basis
  // without losing information.
  //
  // Parameters:
  //   ray
  //     a ray3, represented in the reference basis.
  //   basis
  //     a plane3, represented in the reference basis.
  //
  // Return:
  //   a ray3, represented in the given basis.
  //

  const ibasis = invert(basis)
  return transitFrom(ray, ibasis)
}
