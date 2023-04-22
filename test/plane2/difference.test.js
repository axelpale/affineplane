const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic difference', (t) => {
    const source = { a: 1, b: 0, x: 1, y: 1 }
    const target = { a: 2, b: 0, x: 2, y: 2 }

    t.almostEqual(
      plane2.between(source, target),
      { a: 0.5, b: 0, x: 0, y: 0 },
      'transformation that would map target to source'
    )

    t.end()
  })
}
