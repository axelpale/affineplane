// @affineplane.plane3.compose(planea, planeb)
//
// Combine two planes together.
//
// Parameters:
//   planea
//     a plane3 on the reference plane.
//     .. This plane maps from plane A to the reference plane.
//   planeb
//     a plane3 on the planea.
//     .. This plane maps from plane B to plane A.
//
// Return
//   a plane3 on the reference plane.
//   .. This plane maps from plane B to the reference plane.
//
module.exports = require('../helm3/compose')
