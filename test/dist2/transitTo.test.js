const affineplane = require('../../index')
const dist2 = affineplane.dist2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    let dist, plane

    dist = 2
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.equal(
      dist2.transitTo(dist, plane),
      dist,
      'identity does not change measures'
    )

    dist = 2
    plane = { a: 0, b: 2, x: 10, y: 10 }
    t.equal(
      dist2.transitTo(dist, plane),
      1,
      'only scale matters'
    )

    t.end()
  })
}
