// @affineplane.vec4
//
// A vec4 is a 4D vector { x, y, z, w }.
//

// @affineplane.vec4.ZERO
//
// The zero vector in 4D
//
exports.ZERO = { x: 0, y: 0, z: 0, w: 0 }

exports.add = require('./add')
exports.almostEqual = require('./almostEqual')
exports.create = require('./create')
exports.equal = require('./equal')
exports.norm = require('./norm')
exports.scaleBy = require('./scaleBy')
exports.validate = require('./validate')
