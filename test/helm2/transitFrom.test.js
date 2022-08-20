const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic helm2 transit from plane', (t) => {
    const plane = { a: 1, b: 0, x: 2, y: 3 }

    t.deepEqual(
      helm2.transitFrom({ a: 2, b: 0, x: 2, y: 3 }, plane),
      { a: 2, b: 0, x: 4, y: 6 }
    )

    t.end()
  })
}
