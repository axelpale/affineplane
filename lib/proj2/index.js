// Projetions are maps from plane A to plane B.
// A projection can be used as a function that converts
// coordinates of geometric structures from plane to plane.
// The structure stays completely intact: isomorphism.
// Only the representation changes.
// The structures are in affine space: there is no origin or 'global' plane.
//
// The projection defines the location of plane A on plane B.
// The projection defines the orientation of plane A on plane B.
// A projection maps the position (0,0) on plane A to the same
// position on plane B, represented in the basis of B.
//
// If plane A is a child element and plane B the parent, then
// the projection from A to B is equivalent to the location of A on B.
//
const tran2 = require('./tran2')

exports.I =
exports.IDENTITY = tran2.I

exports.copy = tran2.copy
exports.create = tran2.create

// exports.add =
// exports.apply =
// exports.multiply =
exports.combine =
exports.compose = require('./compose')

exports.invert =
exports.inverse = require('./inverse')

exports.transform = (pr, tr) => {
  // Compute new projection between plane A and plane B after
  // the plane A has been moved by tran4 on plane B.
  //
  // Parameters:
  //   pr
  //     proj from plane A to plane B
  //   tr
  //     tran4 to move plane A on plane B
  //
  // Return
  //   proj
  //

  // Matrix multiplication matrix(tran4) * matrix(proj)
  return {
    a: tr.a * pr.a - tr.b * pr.b,
    b: tr.b * pr.a + tr.a * pr.b,
    x: tr.a * pr.x - tr.b * pr.y + tr.x,
    y: tr.b * pr.x + tr.a * pr.y + tr.y
  }
}

// exports.difference =
// exports.fromto =
// exports.projectionBetween =
// exports.relative =
exports.delta =
exports.between = require('./between')

exports.distance = (pr, d) => {
  // Project a one-dimensional distance
  //
  // Parameters:
  //   pr
  //     projection between planes
  //   d
  //     number
  //
  // Return
  //   number
  //
  const scale = Math.sqrt(pr.b * pr.b + pr.a * pr.a)
  return d * scale
}

exports.point2 = require('./point2')
}

// exports.projectTranslation =
// exports.projectVector =
exports.vector2 = (pr, v2) => {
  // Project vector2 from plane to another.
  // Translations do not affect vectors,
  // only scaling and rotation do.
  //
  // Parameters:
  //   pr
  //     projection between planes
  //   v2
  //     vector2, a translation on a plane,
  //     represented on the source plane.
  //
  // Return:
  //   vector2, represented on the target plane,
  //
  return {
    x: pr.a * v2.x - pr.b * v2.y,
    y: pr.b * v2.x + pr.a * v2.y
  }
}

// exports.lin2 =
// exports.linear =
exports.linear2 = (pr, lin2) => {
  // Project a linear transformation from plane to another.
  // Use to represent the linear transformation on another plane.
  //
  // Parameters:
  //   pr
  //     projection between planes
  //   lin2
  //     linear2, linear transformation, represented on the source plane.
  //
  // Return:
  //   linear2, represented on the target plane
  //
  return {
    a: pr.a * tr2.a - pr.b * tr2.b,
    b: pr.b * tr2.a + pr.a * tr2.b
  }
}

// exports.projectProj =
// exports.projectTransform =
// exports.tran =
exports.tran2 = (pr, tr) => {
  // Transforms are quite similar to projections but they
  // happen on the plane, and thus are automorphisms.
  //
  // Parameters:
  //   pr
  //     proj, projection to be applied
  //   tr
  //     tran4, an affine similarity transformation
  //
  // Return
  //   tran4
  //

  // Matrix multiplication matrix(pr) * matrix(tr)
  return {
    a: pr.a * tr.a - pr.b * tr.b,
    b: pr.b * tr.a + pr.a * tr.b,
    x: pr.a * tr.x - pr.b * tr.y + pr.x,
    y: pr.b * tr.x + pr.a * tr.y + pr.y
  }
}
