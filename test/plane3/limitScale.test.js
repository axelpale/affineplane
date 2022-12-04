const plane3 = require('../../index').plane3
const limitScale = plane3.limitScale

module.exports = (ts) => {
  ts.test('case: smoke limitDilation', (t) => {
    // More comprehensive test in helm3, because the same code under the hood.

    const rothalf = { a: 0, b: 0.5, x: 1, y: 2, z: 3 }
    t.deepEqual(
      limitScale(rothalf, 0.64, 0.75),
      { a: 0, b: 0.64, x: 1, y: 2, z: 3 },
      'below limit, scale to minimum'
    )

    t.end()
  })
}
