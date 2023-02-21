const affineplane = require('../../index')
const scalar3 = affineplane.scalar3

module.exports = (ts) => {
  ts.test('case: basic transitTo', (t) => {
    let scalar, plane

    scalar = 2
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.equal(
      scalar3.transitTo(scalar, plane),
      scalar,
      'identity does not change scalar representation'
    )

    scalar = 1000
    plane = { a: 0, b: 10, x: 10, y: 10, z: 10 }
    t.equal(
      scalar3.transitTo(scalar, plane),
      1,
      'only scale matters'
    )

    t.end()
  })
}
