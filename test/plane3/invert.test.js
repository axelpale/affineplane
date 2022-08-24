// Light-weight tests because
// plane3.invert is helm3.invert
// which has wider test suite.
//
const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.almostEqual(
      plane3.invert({ a: 1, b: 0, x: 0, y: 0, z: 0 }),
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      'identity does not change under inversion'
    )

    t.end()
  })
}
