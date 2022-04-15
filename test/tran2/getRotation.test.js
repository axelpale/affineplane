const tran2 = require('../../index').tran2
const getRotation = tran2.getRotation

const multiply = tran2.multiply
const ROT45 = tran2.ROT45
const ROT90 = tran2.ROT90
const ROT180 = tran2.ROT180

module.exports = (ts) => {
  ts.test('case: basic rotations', (t) => {
    t.almostEqual(getRotation(ROT90), Math.PI / 2)
    t.almostEqual(getRotation(ROT45), Math.PI / 4)

    const double90 = multiply(ROT90, ROT90)
    t.almostEqual(
      getRotation(double90),
      getRotation(ROT180)
    )

    const triple90 = multiply(multiply(ROT90, ROT90), ROT90)
    t.notAlmostEqual(
      getRotation(triple90),
      getRotation(ROT180)
    )

    t.end()
  })
}
