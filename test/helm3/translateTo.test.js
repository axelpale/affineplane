const helm3 = require('../../index').helm3
const translateTo = helm3.translateTo

const IDENTITY = helm3.IDENTITY
const UNIT = helm3.UNIT

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    t.transformEqual(
      translateTo(IDENTITY, { x: 1, y: 2, z: 3 }),
      { a: 1, b: 0, x: 1, y: 2, z: 3 },
      'to 3d point from identity'
    )

    t.transformEqual(
      translateTo(UNIT, { x: 2, y: 3 }),
      { a: 1, b: 1, x: 2, y: 3, z: 1 },
      'to 2d point'
    )

    t.end()
  })
}
