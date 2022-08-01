const helm2 = require('../../index').helm2
const rotateBy = helm2.rotateBy
const IDENTITY = helm2.IDENTITY
const ROT180 = helm2.ROT180

module.exports = (ts) => {
  ts.test('case: basic rotations', (t) => {
    const c1 = { x: 0, y: 0 }
    t.transformEqual(rotateBy(ROT180, c1, Math.PI), IDENTITY)
    t.transformEqual(rotateBy(IDENTITY, c1, 0), IDENTITY)

    const c2 = { x: 100, y: 100 }
    t.transformEqual(
      rotateBy({ a: 1, b: 0, x: 0, y: 0 }, c2, Math.PI),
      { a: -1, b: 0, x: 200, y: 200 },
      'around non-trivial center'
    )

    t.end()
  })
}