const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic determinant', (t) => {
    t.equal(
      helm3.det({ a: 1, b: 0, x: 0, y: 0, z: 0 }),
      1,
      'identity'
    )

    t.equal(
      helm3.determinant({ a: 1, b: 0, x: 0, y: 0, z: 0 }),
      1,
      'alias'
    )

    t.equal(
      helm3.det({ a: 0, b: 0, x: 0, y: 0, z: 0 }),
      0,
      'singular'
    )

    t.equal(
      helm3.det({ a: 1, b: 0, x: 6, y: 6, z: 6 }),
      1,
      'translation should not affect'
    )

    t.equal(
      helm3.det({ a: 3, b: 4, x: 0, y: 0, z: 0 }),
      25,
      'L2 norm of linear basis vector'
    )

    t.end()
  })
}
