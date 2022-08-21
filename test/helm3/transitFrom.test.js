const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic helm3 transit from plane', (t) => {
    const plane = { a: 1, b: 0, x: 2, y: 3, z: 4 }

    t.deepEqual(
      helm3.transitFrom({ a: 2, b: 0, x: 2, y: 3, z: 5 }, plane),
      { a: 2, b: 0, x: 4, y: 6, z: 9 }
    )

    t.end()
  })
}
