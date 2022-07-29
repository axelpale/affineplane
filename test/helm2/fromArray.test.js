const helm2 = require('../../index').helm2

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(helm2.fromArray([1, 2, 3, 4]), {
      a: 1,
      b: 2,
      x: 3,
      y: 4
    })

    t.end()
  })
}
