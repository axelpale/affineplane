const tran2 = require('../../lib/tran2')

module.exports = (ts) => {
  ts.test('case: around twice', (t) => {
    t.transformEqual(tran2.fromPolar(1, Math.PI * 4, 0, 0), {
      a: 1,
      b: 0,
      x: 0,
      y: 0
    })

    t.end()
  })

  ts.test('case: zero scale', (t) => {
    // NOTE invalid affine transformation
    t.transformEqual(tran2.fromPolar(0, 0, 0, 0), {
      a: 0,
      b: 0,
      x: 0,
      y: 0
    })

    t.end()
  })
}
