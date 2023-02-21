// @affineplane.scalar3
//
// The scalar3 is a directionless measure of order 3.
// It is suitable for **volume measurements** that undergo basis transitions.
//
// For example, let us have 1x1x1 box in a basis of scale 1.
// The volume of the box is 1 unit.
// If we transit the box into a basis of scale 2,
// the box dimensions half to 0.5x0.5x0.5 and the volume becomes, not half,
// but one eight.
//
// For another example, consider a miniature building in scale 1:100.
// In the miniature, the volume of 1 cubic meter is represented by
// 1 cubic centimeter, thus 1:1000000 of the original volume.
//

exports.almostEqual = require('./almostEqual')
exports.create = require('./create')
exports.equal = require('./equal')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
