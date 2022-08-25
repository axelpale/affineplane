const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic dilations', (t) => {
    t.almostEqual(
      helm2.setDilation({ a: 1, b: 0, x: 0, y: 0 }, 2),
      { a: 2, b: 0, x: 0, y: 0 },
      'apply to identity'
    )

    t.almostEqual(
      helm2.setDilation({ a: 0, b: -1, x: 2, y: 2 }, 2),
      { a: 0, b: -2, x: 2, y: 2 },
      'preserve rotation and translation'
    )

    t.almostEqual(
      helm2.setDilation({ a: 1, b: 2, x: 3, y: 4 }, 0),
      { a: 0, b: 0, x: 3, y: 4 },
      'zero should make singular'
    )

    t.end()
  })
}
