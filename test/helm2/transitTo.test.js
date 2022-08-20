const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic helm2 transit to plane', (t) => {
    const plane = { a: 2, b: 0, x: 20, y: 30 }

    t.deepEqual(
      helm2.transitTo({ a: 2, b: 0, x: 20, y: 30 }, plane),
      { a: 1, b: 0, x: 0, y: 0 }
    )

    t.end()
  })
}
