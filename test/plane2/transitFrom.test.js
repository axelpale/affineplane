const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic plane2 transit from another plane', (t) => {
    const plane = { a: 2, b: 0, x: 2, y: 3 }
    const source = { a: 1, b: 0, x: 2, y: 4 }
    t.deepEqual(
      plane2.transitFrom(plane, source),
      { a: 2, b: 0, x: 4, y: 7 },
      'scale, rotation, and translation combined'
    )

    t.end()
  })
}
