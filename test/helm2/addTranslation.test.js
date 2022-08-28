const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic rotation adding', (t) => {
    t.almostEqual(
      helm2.addTranslation({ a: 1, b: 0, x: 0, y: 0 }, { x: 1, y: 2 }),
      { a: 1, b: 0, x: 1, y: 2 },
      'apply to identity'
    )

    t.almostEqual(
      helm2.addTranslation({ a: 0, b: -2, x: 2, y: 2 }, { x: -2, y: -2 }),
      { a: 0, b: -2, x: 0, y: 0 },
      'preserve dilation and rotation'
    )

    t.end()
  })
}
