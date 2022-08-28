const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic fromFeatures', (t) => {
    t.almostEqual(
      plane3.fromFeatures({
        angle: Math.PI / 2,
        scale: 2,
        origin: { x: 3, y: 4, z: 5 }
      }),
      { a: 0, b: 2, x: 3, y: 4, z: 5 }
    )

    t.almostEqual(
      plane3.fromFeatures({}),
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      'default to identity'
    )

    t.end()
  })
}
