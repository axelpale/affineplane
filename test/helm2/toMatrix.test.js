const helm2 = require('../../index').helm2

module.exports = (ts) => {
  ts.test('case: correct properties', (t) => {
    const tr = { a: 1, b: 2, x: 3, y: 4 }

    t.deepEqual(helm2.toMatrix(tr), {
      a: 1,
      b: 2,
      c: -2,
      d: 1,
      e: 3,
      f: 4
    })

    t.end()
  })
}
