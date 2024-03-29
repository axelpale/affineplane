// @affineplane.path3
//
// Three-dimensional path; Array of point3; Open sequence of points;
// Does not form a polygon but a sequence of line segments.
//
// Example: `[{ x, y, z }, { x, y, z }, ...]`
//

exports.combine = require('./combine')
exports.create = require('./create')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
