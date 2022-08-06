// affineplane.ortho3.vec2(proj, vec)
//
// Project a vec2 from a plane to another.
// Translations do not affect vectors,
// only scaling and rotation do.
//
// Parameters:
//   proj
//     an ortho3
//   vec
//     a vec2, a translation on a plane,
//     ..represented on the source plane.
//
// Return:
//   a vec2, the same vector represented on the target plane,
//
module.exports = require('../proj2/vec2')
