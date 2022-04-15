// Basis is a transition matrix from a coordinate space to a reference coordinate space.
// In practice the reference space can be called a origin, root, or parent plane.
// A basis defines the linear basis of an geometric object.
//
// The linear basis forms a transition matrix, that is a similarity transformation matrix.
// that maps a vector or a matrix to another coordinate system.
//
// Definition. In the context of a hierarchy of planes,
// - let Ba be a basis of plane Pa on the reference plane Pr.
// - let Bar be a transition from the plane Pa to the plane Pr.
// - let Bra be a transition from the plane Pr to the plane Pa.
// Now the following hold:
// - Bar = Ba
// - Bra = inverse(Ba)
//

const tran2 = require('../tran2')

exports.I = tran2.IDENTITY
exports.IDENTITY = exports.I

exports.create = tran2.create

/// exports.estimate = transform.estimate
