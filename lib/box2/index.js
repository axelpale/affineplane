// affineplane.box2
//
// Two-dimensional rectangle. Unlike size2, box2 has location and orientation
// and thus can be represented in any basis without loss of information.
//
// Represented with an object `{ a, b, x, y, w, h }` where
// - `a,b` provide orientation with respect to the reference basis.
// - `x,y` provide origin position in the reference basis.
// - `w,h` provide box size on the reference basis.
//
exports.at = require('./at')
exports.atNorm = require('./atNorm')
exports.create = require('./create')
exports.fromPoints = require('./fromPoints')
exports.getArea = require('./getArea')
exports.getBounds = require('./getBounds')
exports.getScale = require('./getScale')
exports.homothety = require('./homothety')
exports.projectTo = require('./projectTo')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
