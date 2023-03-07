const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: basic transit to plane', (t) => {
    t.deepEqual(sphere3.transitTo(
      { x: 20, y: 30, z: 40, r: 40 },
      { a: 1, b: 0, x: 20, y: 30, z: 40 }
    ), { x: 0, y: 0, z: 0, r: 40 })

    t.end()
  })
}
