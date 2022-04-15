const tran2 = require('../../index').tran2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    const tr = { a: 1, b: 2, x: 3, y: 4 }
    t.deepEqual(tran2.getTranslation(tr), {
      x: 3,
      y: 4
    })

    t.end()
  })
}
