const helm3 = require('../../index').helm3

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(helm3.fromArray([1, 2, 3, 4, 5]), {
      a: 1,
      b: 2,
      x: 3,
      y: 4,
      z: 5
    })

    t.end()
  })
}
