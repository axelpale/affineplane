const plane2 = require('../../index').plane2
const limitScale = plane2.limitScale

module.exports = (ts) => {
  ts.test('case: smoke limitDilation', (t) => {
    // More comprehensive test in helm2, because same code under the hood.

    const rothalf = { a: 0, b: 0.5, x: 2, y: 2 }
    t.deepEqual(
      limitScale(rothalf, 0.64, 0.75),
      { a: 0, b: 0.64, x: 2, y: 2 },
      'below limit, scale to minimum'
    )

    t.end()
  })
}
