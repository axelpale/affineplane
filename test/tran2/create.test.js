const tran2 = require('../../index').tran2

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(tran2.create(1, 2, 3, 4), {
      a: 1,
      b: 2,
      x: 3,
      y: 4
    }, 'create tran2 object')

    t.end()
  })
}
