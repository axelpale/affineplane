const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic transit to plane', (t) => {
    t.deepEqual(sphere2.transitTo(
      { x: 20, y: 30, r: 40 },
      { a: 1, b: 0, x: 20, y: 30 }
    ), { x: 0, y: 0, r: 40 })

    t.end()
  })
}
