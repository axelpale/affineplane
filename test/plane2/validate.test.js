// Light-weight test suite because
// plane2.validate is helm2.validate
// which has wider test suite.
//
const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.true(plane2.validate({ a: 1, b: 2, x: 3, y: 4 }))
    t.false(plane2.validate({ a: 1, b: 2, x: 3 }))
    t.end()
  })
}
