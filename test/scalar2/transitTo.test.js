const affineplane = require('../../index')
const scalar2 = affineplane.scalar2

module.exports = (ts) => {
  ts.test('case: basic transitTo', (t) => {
    let scalar, plane

    scalar = 2
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.equal(
      scalar2.transitTo(scalar, plane),
      scalar,
      'identity does not change scalar representation'
    )

    scalar = 100
    plane = { a: 0, b: 10, x: 10, y: 10, z: 10 }
    t.equal(
      scalar2.transitTo(scalar, plane),
      1,
      'only scale matters'
    )

    t.end()
  })
}
