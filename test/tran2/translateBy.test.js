const tran2 = require('../../index').tran2
const translateBy = tran2.translateBy

const IDENTITY = tran2.IDENTITY
const ROT90 = tran2.ROT90

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    t.transformEqual(
      translateBy(IDENTITY, { dx: 10, dy: 10 }),
      { a: 1, b: 0, x: 10, y: 10 }
    )

    t.transformEqual(
      translateBy(ROT90, { dx: 10, dy: 10 }),
      { a: 0, b: 1, x: 10, y: 10 }
    )

    t.end()
  })
}
