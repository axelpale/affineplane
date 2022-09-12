// affineplane.dist2
//
// The distance measure is a directionless, always positive number.
// If transited between planes, only a change in the coordinate scale
// affects the distance. Rotation or translation of the plane does not
// change the distance measure.
//
// ![Distance transited between planes](projection_distance_2d.png)
//

exports.create = require('./create')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
