// affineplane.dist2
//
// The distance measure is a directionless, always positive number.
// If transited between planes, only a change in the coordinate scale
// affects the distance. Roation or translation of the plane does not
// change the distance measure.
//

exports.create = require('./create')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
