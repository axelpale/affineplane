const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic plane3 transit from another plane', (t) => {
    const plane = { a: 2, b: 0, x: 2, y: 3, z: 5 }
    const source = { a: 1, b: 0, x: 2, y: 4, z: 6 }
    t.deepEqual(
      plane3.transitFrom(plane, source),
      { a: 2, b: 0, x: 4, y: 7, z: 11 },
      'scale, rotation, and translation combined'
    )

    t.end()
  })
}
