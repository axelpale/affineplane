const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic helm3 transit from plane', (t) => {
    const tr = { a: 2, b: 0, x: 2, y: 3, z: 5 }
    const source = { a: 1, b: 0, x: 2, y: 4, z: 6 }
    t.deepEqual(
      helm3.transitFrom(tr, source),
      { a: 2, b: 0, x: 2, y: 3, z: 5 },
      'plane translation does not affect'
    )

    t.end()
  })
}
