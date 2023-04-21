// @affineplane.scalar2
//
// The scalar2 is a directionless measure of order 2.
// It is suitable for **area measurements** that undergo basis transitions.
//
// For example, let us have 1x1 square on a basis of scale 1.
// Area of the square is 1 unit. If we transit the square to a basis of scale 2,
// the square dimensions half to 0.5x0.5 and the area becomes, not half,
// but one fourth.
//
// For another example, consider a map in scale 1:100.
// On the map, an area of 1 squaremeter of ground is represented by
// 1 squarecentimeter of paper, thus 1:10000 of the original area.
//

exports.almostEqual = require('./almostEqual')
exports.create = require('./create')
exports.equal = require('./equal')
exports.projectToPlane = require('./projectToPlane')
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.validate = require('./validate')
