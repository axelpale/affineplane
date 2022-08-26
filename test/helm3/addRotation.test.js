const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic rotation adding', (t) => {
    t.almostEqual(
      helm3.addRotation({ a: 1, b: 0, x: 0, y: 0, z: 0 }, Math.PI),
      { a: -1, b: 0, x: 0, y: 0, z: 0 },
      'apply to identity'
    )

    t.almostEqual(
      helm3.addRotation({ a: 0, b: -2, x: 2, y: 2, z: 3 }, Math.PI),
      { a: 0, b: 2, x: 2, y: 2, z: 3 },
      'preserve dilation and translation'
    )

    t.end()
  })
}
