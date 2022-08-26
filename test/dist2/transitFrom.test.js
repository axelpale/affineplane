const affineplane = require('../../index')
const dist2 = affineplane.dist2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    let dist, plane

    dist = 2
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.equal(
      dist2.transitFrom(dist, plane),
      dist,
      'identity does not change measures'
    )

    dist = 2
    plane = { a: 2, b: 0, x: 0, y: 0 }
    t.equal(
      dist2.transitFrom(dist, plane),
      4,
      'two on two equals four on one'
    )

    t.end()
  })
}
