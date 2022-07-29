const helm2 = require('../../index').helm2
const getRotation = helm2.getRotation

const multiply = helm2.multiply
const ROT45 = helm2.ROT45
const ROT90 = helm2.ROT90
const ROT180 = helm2.ROT180

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
