// Light-weight test suite because
// plane3.validate is helm3.validate
// which has wider test suite.
//
const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    t.true(plane3.validate({ a: 1, b: 2, x: 3, y: 4, z: 5 }))
    t.false(plane3.validate({ a: 1, b: 2, x: 3, y: 4 }))
    t.end()
  })
}
