const compose = require('./compose')
const invert = require('./invert')

module.exports = (p, pp) => {
  // @affineplane.plane3.difference(p, pp)
  // @affineplane.plane3.between
  //
  // Find the difference between the two planes.
  // In other words, compute a transformation that would map the plane pp
  // to the plane p: `T * pp = p <=> T = p * inv(pp)`
  //
  // To represent planes on each other, see affineplane.plane3.transitFrom
  // and affineplane.plane3.transitTo.
  //
  // Parameters:
  //   p
  //     a plane3, in the reference basis.
  //   pp
  //     a plane3, in the reference basis.
  //
  // Return
  //   a helm3, a transformation, in the reference basis.
  //

  // OPTIMIZE open the functions if used a lot.
  const ipp = invert(pp)
  return compose(p, ipp)
}
