const tran2 = require('../../index').tran2

module.exports = (ts) => {
  ts.test('case: ensure different identity', (t) => {
    const tr = { a: 1, b: 0, x: 0, y: 0 }
    t.notEqual(tran2.copy(tr), tr)

    t.end()
  })
}
