const compose = require('./compose')
const invert = require('./invert')

module.exports = (h, hh) => {
  // @affineplane.helm3.difference(h, hh)
  //
  // Compute a transformation that maps the codomain of hh to the codomain of h.
  // In other words, find transformation T such that T*hh = h <=> T = h*inv(hh).
  // The result is the difference between the transformations h and hh.
  //
  // Parameters:
  //   h
  //     a helm3
  //   hh
  //     a helm3
  //
  // Return
  //   a helm3
  //

  const ihh = invert(hh)
  return compose(h, ihh)
}
