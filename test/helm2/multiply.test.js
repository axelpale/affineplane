const helm2 = require('../../index').helm2
const multiply = helm2.multiply
const IDENTITY = helm2.IDENTITY
const ROT90 = helm2.ROT90
const ROT180 = helm2.ROT180
const X2 = helm2.X2
const HALF = helm2.HALF

module.exports = (ts) => {
  ts.test('case: basic matrix products', (t) => {
    t.transformEqual(multiply(ROT180, ROT180), IDENTITY)
    t.transformEqual(multiply(ROT90, ROT90), ROT180)
    t.transformEqual(multiply(X2, HALF), IDENTITY)

    t.end()
  })
}
