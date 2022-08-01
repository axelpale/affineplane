const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      helm3.create(1, 2, 3, 4, 5),
      { a: 1, b: 2, x: 3, y: 4, z: 5 }
    )

    t.end()
  })
}
