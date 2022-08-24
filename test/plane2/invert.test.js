// Light-weight tests because
// plane2.invert is helm2.invert
// which has wider test suite.
//
const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.almostEqual(
      plane2.invert({ a: 1, b: 0, x: 0, y: 0 }),
      { a: 1, b: 0, x: 0, y: 0 },
      'identity does not change under inversion'
    )

    t.end()
  })
}
