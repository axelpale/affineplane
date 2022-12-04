const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic fromPlane', (t) => {
    const plane = { a: 2, b: 0, x: -1, y: 1, z: 0 }
    const zero = { x: 0, y: 0, z: 0 }
    const c = { x: 2, y: 2, z: 2 }

    t.almostEqual(
      helm3.fromPlane(plane, zero),
      { a: 2, b: 0, x: -1, y: 1, z: 0 },
      'scaling about zero point does not affect'
    )

    t.almostEqual(
      helm3.fromPlane(plane, c),
      { a: 2, b: 0, x: 1, y: 3, z: 2 },
      'scaling about non-zero point'
    )

    t.end()
  })
}
