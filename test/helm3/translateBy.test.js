const helm3 = require('../../index').helm3
const translateBy = helm3.translateBy

const IDENTITY = helm3.IDENTITY
const ROT90 = helm3.ROT90

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    t.transformEqual(
      translateBy(IDENTITY, { x: 1, y: 2, z: 3 }),
      { a: 1, b: 0, x: 1, y: 2, z: 3 },
      '3d vector'
    )

    t.transformEqual(
      translateBy(ROT90, { x: 1, y: 2 }),
      { a: 0, b: 1, x: 1, y: 2, z: 0 },
      '2d vector'
    )

    t.end()
  })
}
