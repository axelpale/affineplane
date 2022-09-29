// affineplane.dir2
//
// Number in ]-π, π]
//
// A direction is just an angle number in radians clockwise from
// the positive x-axis around z-axis.
// The direction is capped between -Pi (exclusive) and Pi (inclusive).
//
// When a direction is transited between planes, only the rotation of
// the coordinate space affects the direction.
//
// ![Direction angle](geometry_direction.png)
//
exports.create = require('./create')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
