const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    t.almostEqual(
      plane2.translateBy({ a: 1, b: 0, x: 0, y: 0 }, { x: 2, y: 2 }),
      { a: 1, b: 0, x: 2, y: 2 },
      'apply to identity'
    )

    t.almostEqual(
      plane2.translateBy({ a: 0, b: 2, x: 1, y: 2 }, { x: 2, y: 2 }),
      { a: 0, b: 2, x: 3, y: 4 },
      'preserve scale and angle'
    )

    t.end()
  })
}
