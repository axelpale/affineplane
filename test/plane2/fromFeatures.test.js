const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic fromFeatures', (t) => {
    t.almostEqual(
      plane2.fromFeatures({
        angle: Math.PI / 2,
        scale: 2,
        origin: { x: 3, y: 4 }
      }),
      { a: 0, b: 2, x: 3, y: 4 }
    )

    t.end()
  })
}
