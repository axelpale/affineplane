const compose = require('./compose')
const invert = require('./invert')

module.exports = (p, pp) => {
  // @affineplane.plane2.difference(p, pp)
  // @affineplane.plane2.between
  //
  // Find the difference between two planes. In other words,
  // compute such transformation T that maps the plane pp to the plane p.
  //
  // Parameters:
  //   p
  //     a plane2, in the reference basis.
  //   pp
  //     a plane2, in the reference basis.
  //
  // Return
  //   a helm2, in the reference basis.
  //

  // OPTIMIZE open the functions if projection between is used a lot.
  const ipp = invert(pp)
  return compose(p, ipp)
}
