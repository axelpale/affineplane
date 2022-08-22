const vec2 = require('../../lib/vec2')

module.exports = (ts) => {
  ts.test('case: basic transit to plane', (t) => {
    t.deepEqual(vec2.transitTo(
      { x: 20, y: 30 },
      { a: 2, b: 0, x: 20, y: 30 }
    ), { x: 10, y: 15 })

    t.end()
  })
}
