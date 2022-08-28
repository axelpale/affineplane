const helm2 = require('../../index').helm2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    const tr = { a: 1, b: 2, x: 3, y: 4 }
    t.deepEqual(helm2.getTranslation(tr), {
      x: 3,
      y: 4
    })

    t.end()
  })
}
