const tran2 = require('../../index').tran2
const multiply = tran2.multiply
const IDENTITY = tran2.IDENTITY
const ROT90 = tran2.ROT90
const ROT180 = tran2.ROT180
const X2 = tran2.X2
const HALF = tran2.HALF

module.exports = (ts) => {
  ts.test('case: basic matrix products', (t) => {
    t.transformEqual(multiply(ROT180, ROT180), IDENTITY)
    t.transformEqual(multiply(ROT90, ROT90), ROT180)
    t.transformEqual(multiply(X2, HALF), IDENTITY)

    t.end()
  })
}
