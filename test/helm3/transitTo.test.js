const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic helm3 transit to plane', (t) => {
    const plane = { a: 2, b: 0, x: 20, y: 30, z: 40 }

    t.deepEqual(
      helm3.transitTo({ a: 2, b: 0, x: 20, y: 30, z: 40 }, plane),
      { a: 1, b: 0, x: 0, y: 0, z: 0 }
    )

    t.end()
  })
}
