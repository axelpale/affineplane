// affineplane.plane2.scaleBy(plane, center, multiplier)
//
// Create a plane that is scaled by the multiplier around
// a center point. For example, if a plane with basis vectors
// ex = { 1, 0 }, ey = { 0, 1 } is scaled by 2, the basis vectors
// of the new plane are ex_hat = { 2, 0 }, ey_hat = { 0, 2 }.
//
// Parameters:
//   plane
//     a plane2 on the reference plane
//   center
//     a point2 on the reference plane
//   multiplier
//     a number, the scaling factor
//
// Return:
//   a plane2, a scaled plane
//
module.exports = require('../helm2/scaleBy')
