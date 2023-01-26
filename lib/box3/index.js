// affineplane.box3
//
// Three-dimensional cuboid. Unlike size3, box3 has location and orientation
// and thus can be represented in any basis without loss of information.
//
// Represented with an object `{ a, b, x, y, z, w, h, d }` where
// - `a,b` provide orientation with respect to the reference basis.
// - `x,y,z` provide origin position in the reference basis.
// - `w,h,d` provide box size on the reference basis.
//
exports.create = require('./create')
exports.validate = require('./validate')
