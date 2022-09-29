const affineplane = require('../../index')
const dist3 = affineplane.dist3

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    let dist, plane

    dist = 2
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.equal(
      dist3.transitTo(dist, plane),
      dist,
      'identity does not change measures'
    )

    dist = 2
    plane = { a: 0, b: 2, x: 10, y: 10, z: 10 }
    t.equal(
      dist3.transitTo(dist, plane),
      1,
      'only scale matters'
    )

    t.end()
  })
}
