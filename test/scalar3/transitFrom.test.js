const affineplane = require('../../index')
const scalar3 = affineplane.scalar3

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    let scalar, plane

    scalar = 2
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.equal(
      scalar3.transitFrom(scalar, plane),
      scalar,
      'identity does not change scalar representation'
    )

    scalar = 1
    plane = { a: 10, b: 0, x: 10, y: 10, z: 10 }
    t.equal(
      scalar3.transitFrom(scalar, plane),
      1000,
      '1 unit at scale 10 equals 1000 units at scale 1'
    )

    t.end()
  })
}
