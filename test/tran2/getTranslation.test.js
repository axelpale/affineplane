const transform = require('../../index').transform

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    const tr = { a: 1, b: 2, x: 3, y: 4 }
    t.deepEqual(transform.getTranslation(tr), {
      x: 3,
      y: 4
    })

    t.end()
  })
}
