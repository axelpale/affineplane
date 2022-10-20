// affineplane.quat4
//
// A quaternion { a, b, c, d }
//

exports.add = require('./add')
exports.conjugate = require('./conjugate')
exports.create = require('./create')
exports.difference = require('./difference')
exports.diff = exports.difference
exports.fromVector = require('./fromVector')
exports.hamilton = require('./hamilton')
exports.multiply = exports.hamilton
exports.norm = require('./norm')
