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
const tran4 = require('./tran4')

exports.I =
exports.IDENTITY = tran4.I

exports.copy = tran4.copy
exports.create = tran4.create

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
    a: tr.da * pr.a - tr.db * pr.b,
    b: tr.db * pr.a + tr.da * pr.b,
    x: tr.da * pr.x - tr.db * pr.y + tr.dx,
    y: tr.db * pr.x + tr.da * pr.y + tr.dy
  }
}

// exports.difference =
// exports.fromto =
// exports.projectionBetween =
// exports.relative =
exports.delta =
exports.between = (sourceProj, targetProj) => {
  // Finds a projection from a source plane A to a target plane B
  // from their projections to a intermediate root plane R.
  // The result is a combination of the inverse of the target projection
  // and the source projection.
  //
  // Parameters:
  //   sourceProj
  //     a projection from the source plane A to a root plane R
  //   targetProj
  //     a projection from the target plane B to a root plane R
  //
  // Return
  //   proj
  //
  // TODO open the functions if projection between is used a lot.
  // TODO is the function needed? spaceEl.projectionTo(anotherSpaceEl) exists.
  const invProj = exports.invert(targetProj)
  return exports.combine(invProj, sourceProj)
}

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

exports.point2 = (pr, p2) => {
  // Project a point2
  //
  // Parameters:
  //   pr
  //     projection between planes
  //   p2
  //     point2
  //
  // Return
  //   point2
  //
  return {
    x: pr.a * p2.x - pr.b * p2.y + pr.x,
    y: pr.b * p2.x + pr.a * p2.y + pr.y
  }
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
    dx: pr.a * v2.dx - pr.b * v2.dy,
    dy: pr.b * v2.dx + pr.a * v2.dy
  }
}

// exports.lin2 =
// exports.linear =
exports.tran2 = (pr, tr2) => {
  // Project a linear transformation from plane to another.
  // Use to represent the linear transformation on another plane.
  //
  // Parameters:
  //   pr
  //     projection between planes
  //   tr2
  //     tran2, linear transformation, represented on the source plane.
  //
  // Return:
  //   tran2, represented on the target plane
  //
  return {
    da: pr.a * tr2.da - pr.b * tr2.db,
    db: pr.b * tr2.da + pr.a * tr2.db
  }
}

// exports.projectProj =
// exports.projectTransform =
// exports.tran =
exports.tran4 = (pr, tr) => {
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
