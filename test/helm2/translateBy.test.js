const helm2 = require('../../index').helm2
const translateBy = helm2.translateBy

const IDENTITY = helm2.IDENTITY
const ROT90 = helm2.ROT90

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    t.transformEqual(
      translateBy(IDENTITY, { x: 10, y: 10 }),
      { a: 1, b: 0, x: 10, y: 10 }
    )

    t.transformEqual(
      translateBy(ROT90, { x: 10, y: 10 }),
      { a: 0, b: 1, x: 10, y: 10 }
    )

    t.end()
  })
}
