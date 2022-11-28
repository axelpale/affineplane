const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic fromHelmert', (t) => {
    // create a plane by applying h around c
    const h = { a: 2, b: 0, x: 1, y: 3 }
    const c = { x: 2, y: 2 }
    const zero = { x: 0, y: 0 }

    t.almostEqual(
      plane2.fromHelmert(h, zero),
      { a: 2, b: 0, x: 1, y: 3 },
      'scaling about zero point does not affect'
    )

    t.almostEqual(
      plane2.fromHelmert(h, c),
      { a: 2, b: 0, x: -1, y: 1 },
      'scaling about non-zero point'
    )

    t.end()
  })
}
