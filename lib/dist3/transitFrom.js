// @affineplane.dist3.transitFrom(dist, source)
//
// Transit a distance from the source basis
// to the reference basis.
//
// Parameters:
//   dist
//     a dist3, represented in the source basis.
//   source
//     a plane3, the source basis, represented
//     .. in the reference basis.
//
// Return:
//   a dist3, represented in the reference basis.
//

// Note that scalar1 uses plane2.getScale while plane3.getScale would
// seem more future-compatible.
// However, in v3, the scale is stored in m property and is uniform
// regardless how plane3 orientation is represented.
module.exports = require('../scalar1/transitFrom')
