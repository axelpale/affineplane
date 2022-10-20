const epsilon = require('../epsilon')

module.exports = (domain, range) => {
  // affineplane.quat4.estimate(domain, range)
  //
  // Estimate a quaternion that rotates the domain set of quaternions
  // as close to the range set of quaternions as possible. Note that
  // this cannot be used to estimate rotation between two sets of 3D vectors,
  // because quaternions model orientation, not direction.
  //
  // Parameters:
  //   domain
  //     array of quat4, the source quaternions
  //   range
  //     array of quat4, the target quaternions
  //
  // Return
  //   a quat4, the rotation from the domain to the range.
  //

  // If unequal sizes are given, drop the excess.
  const n = Math.min(domain.length, range.length)

  // The solution consists of mostly dot products of row vectors.
  let da2 = 0
  let db2 = 0
  let dc2 = 0
  let dd2 = 0

  let dara = 0
  let darb = 0
  let darc = 0
  let dard = 0

  let dbra = 0
  let dbrb = 0
  let dbrc = 0
  let dbrd = 0

  let dcra = 0
  let dcrb = 0
  let dcrc = 0
  let dcrd = 0

  let ddra = 0
  let ddrb = 0
  let ddrc = 0
  let ddrd = 0

  for (let i = 0; i < n; i += 1) {
    const da = domain[i].a
    const db = domain[i].b
    const dc = domain[i].c
    const dd = domain[i].d

    da2 += da * da
    db2 += db * db
    dc2 += dc * dc
    dd2 += dd * dd

    const ra = range[i].a
    const rb = range[i].b
    const rc = range[i].c
    const rd = range[i].d

    dara += da * ra
    darb += da * rb
    darc += da * rc
    dard += da * rd

    dbra += db * ra
    dbrb += db * rb
    dbrc += db * rc
    dbrd += db * rd

    dcra += dc * ra
    dcrb += dc * rb
    dcrc += dc * rc
    dcrd += dc * rd

    ddra += dd * ra
    ddrb += dd * rb
    ddrc += dd * rc
    ddrd += dd * rd
  }

  const det = da2 + db2 + dc2 + dd2

  // TODO avoid unnecessary dot products before the determinant test.
  if (det <= epsilon) {
    // Domain just a point. Return identity.
    return { a: 1, b: 0, c: 0, d: 0 }
  }

  const m = 1 / det
  console.log('det', det)

  return {
    a: m * (dara + dbrb + dcrc + ddrd),
    b: m * (darb - dbra + dcrd - ddrc),
    c: m * (darc - dbrd - dcra + ddrb),
    d: m * (dard + dbrc - dcrb - ddra)
  }
}
