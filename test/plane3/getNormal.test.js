const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic normal', (t) => {
    t.almostEqual(
      plane3.getNormal({}),
      { x: 0, y: 0, z: 1 },
      'any input goes'
    )

    t.end()
  })
}
