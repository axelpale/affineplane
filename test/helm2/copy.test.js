const helm2 = require('../../index').helm2

module.exports = (ts) => {
  ts.test('case: ensure different identity', (t) => {
    const tr = { a: 1, b: 0, x: 0, y: 0 }
    t.notEqual(helm2.copy(tr), tr)

    t.end()
  })
}
