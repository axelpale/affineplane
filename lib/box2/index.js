// @affineplane.box2
//
// Two-dimensional rectangle. Unlike size2, box2 has location and orientation
// and thus can be represented in any basis without loss of information.
//
// Represented with an object `{ a, b, x, y, w, h }` where
// - `a,b` provide orientation with respect to the reference basis.
//   .. The norm of vector (a,b) is always 1.
// - `x,y` provide origin position in the reference basis.
// - `w,h` provide box size on the reference basis.
//
exports.almostEqual = require('./almostEqual')
exports.at = require('./at')
exports.atBox = require('./atBox')
exports.atNorm = require('./atNorm')
exports.create = require('./create')
exports.fromPoints = require('./fromPoints')
exports.getAngle = require('./getAngle')
exports.getArea = require('./getArea')
exports.getBasis = require('./getBasis')
exports.getBasisInverse = require('./getBasisInverse')
exports.getBounds = require('./getBounds')
exports.getMinimumBounds = require('./getMinimumBounds')
exports.getPath = require('./getPath')
exports.getPoints = exports.getPath
exports.getPolygon = exports.getPath
exports.getSize = require('./getSize')
exports.homothety = require('./homothety')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.resizeBy = require('./resizeBy')
exports.resizeTo = require('./resizeTo')
exports.rotateBy = require('./rotateBy')
exports.scaleBy = exports.homothety
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translateBy = require('./translateBy')
exports.validate = require('./validate')
