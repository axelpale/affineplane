const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic transform', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    const tr = { a: 0, b: 2, x: 2, y: 2, z: 2 }

    t.deepEqual(
      plane3.transform(plane, tr),
      { a: 0, b: 2, x: 0, y: 4, z: 4 },
      'rotate, scale, and translate'
    )

    t.deepEqual(
      plane3.transformBy(plane, tr),
      plane3.transform(plane, tr),
      'alias'
    )

    t.end()
  })
}
