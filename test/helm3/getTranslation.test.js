const helm3 = require('../../index').helm3

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    const tr = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    t.deepEqual(helm3.getTranslation(tr), {
      x: 3,
      y: 4,
      z: 5
    })

    t.end()
  })
}
