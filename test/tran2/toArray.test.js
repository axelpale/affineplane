const tran2 = require('../../index').tran2
const toArray = tran2.toArray

module.exports = (ts) => {
  ts.test('case: basic transforms to array', (t) => {
    t.deepEqual(toArray(tran2.ROT180), [-1, 0, 0, 0])
    t.deepEqual(toArray({ a: 1, b: 2, x: 3, y: 4 }), [1, 2, 3, 4])

    t.end()
  })
}
