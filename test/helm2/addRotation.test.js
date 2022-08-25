const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic rotation adding', (t) => {
    t.almostEqual(
      helm2.addRotation({ a: 1, b: 0, x: 0, y: 0 }, Math.PI),
      { a: -1, b: 0, x: 0, y: 0 },
      'apply to identity'
    )

    t.almostEqual(
      helm2.addRotation({ a: 0, b: -2, x: 2, y: 2 }, Math.PI),
      { a: 0, b: 2, x: 2, y: 2 },
      'preserve dilation and translation'
    )

    t.end()
  })
}
