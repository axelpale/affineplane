const helm3 = require('../../index').helm3
const toArray = helm3.toArray

module.exports = (ts) => {
  ts.test('case: basic transforms to array', (t) => {
    t.deepEqual(
      toArray(helm3.ROT180),
      [-1, 0, 0, 0, 0]
    )
    t.deepEqual(
      toArray({ a: 1, b: 2, x: 3, y: 4, z: 5 }),
      [1, 2, 3, 4, 5]
    )

    t.end()
  })
}
