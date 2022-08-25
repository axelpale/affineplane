const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    t.almostEqual(
      helm2.setTranslation({ a: 1, b: 2, x: 3, y: 4 }, { x: 0, y: 0 }),
      { a: 1, b: 2, x: 0, y: 0 },
      'zero translation'
    )

    t.almostEqual(
      helm2.setTranslation({ a: 1, b: 2, x: 3, y: 4 }, { x: 3, y: 4 }),
      { a: 1, b: 2, x: 3, y: 4 },
      'same translation'
    )

    t.end()
  })
}
