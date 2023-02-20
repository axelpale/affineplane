const affineplane = require('../../index')
const scalar2 = affineplane.scalar2

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    let scalar, plane

    scalar = 2
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.equal(
      scalar2.transitFrom(scalar, plane),
      scalar,
      'identity does not change scalar representation'
    )

    scalar = 1
    plane = { a: 10, b: 0, x: 10, y: 10, z: 10 }
    t.equal(
      scalar2.transitFrom(scalar, plane),
      100,
      '1 unit at scale 10 equals 100 units at scale 1'
    )

    t.end()
  })
}
