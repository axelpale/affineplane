const helm2 = require('../../lib/helm2')
const inverse = helm2.inverse

module.exports = (ts) => {
  ts.test('case: various inversions', (t) => {
    const inv180 = inverse(helm2.ROT180)
    t.transformEqual(inv180, helm2.ROT180)

    const x2 = inverse(helm2.HALF)
    t.transformEqual(x2, helm2.X2)

    t.end()
  })

  ts.test('case: double inversions', (t) => {
    const inv45 = inverse(helm2.ROT45)
    t.transformEqual(inverse(inv45), helm2.ROT45)

    const inv90 = inverse(helm2.ROT90)
    t.transformEqual(inverse(inv90), helm2.ROT90)

    t.end()
  })

  ts.test('case: detect singular matrix', (t) => {
    t.throws(() => {
      inverse({ a: 0, b: 0, x: 0, y: 0 })
    }, Error)

    t.end()
  })
}
