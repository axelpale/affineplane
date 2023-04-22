const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic difference', (t) => {
    const source = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    const target = { a: 2, b: 0, x: 2, y: 2, z: 2 }

    t.almostEqual(
      plane3.between(source, target),
      { a: 0.5, b: 0, x: 0, y: 0, z: 0 },
      'source represented on target'
    )

    t.end()
  })
}
