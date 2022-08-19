const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: trivial', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.deepEqual(
      point3.transitTo({ x: 0, y: 0, z: 0 }, plane),
      { x: 0, y: 0, z: 0 },
      'zero point'
    )
    t.deepEqual(
      point3.transitTo({ x: 1, y: 1, z: 1 }, plane),
      { x: 1, y: 1, z: 1 },
      'unit point'
    )

    t.end()
  })

  ts.test('case: basic', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 1, z: 1 }

    t.deepEqual(
      point3.transitTo({ x: 0, y: 0, z: 0 }, plane),
      { x: -1, y: -1, z: -1 },
      'relative to plane'
    )

    t.end()
  })
}
