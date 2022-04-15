const tran2 = require('../../lib/tran2')
const inverse = tran2.inverse

module.exports = (ts) => {
  ts.test('case: various inversions', (t) => {
    const inv180 = inverse(tran2.ROT180)
    t.transformEqual(inv180, tran2.ROT180)

    const x2 = inverse(tran2.HALF)
    t.transformEqual(x2, tran2.X2)

    t.end()
  })

  ts.test('case: double inversions', (t) => {
    const inv45 = inverse(tran2.ROT45)
    t.transformEqual(inverse(inv45), tran2.ROT45)

    const inv90 = inverse(tran2.ROT90)
    t.transformEqual(inverse(inv90), tran2.ROT90)

    t.end()
  })

  ts.test('case: detect singular matrix', (t) => {
    t.throws(() => {
      inverse({ a: 0, b: 0, x: 0, y: 0 })
    }, Error)

    t.end()
  })
}
