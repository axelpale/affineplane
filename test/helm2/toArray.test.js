const helm2 = require('../../index').helm2
const toArray = helm2.toArray

module.exports = (ts) => {
  ts.test('case: basic transforms to array', (t) => {
    t.deepEqual(toArray(helm2.ROT180), [-1, 0, 0, 0])
    t.deepEqual(toArray({ a: 1, b: 2, x: 3, y: 4 }), [1, 2, 3, 4])

    t.end()
  })
}
