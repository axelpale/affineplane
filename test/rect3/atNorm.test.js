const affineplane = require('../../index')
const rect3 = affineplane.rect3

module.exports = (ts) => {
  ts.test('case: basic atNorm', (t) => {
    const r = {
      basis: { a: 1, b: 0, x: 0, y: 0, z: 2 },
      size: { w: 10, h: 6 }
    }

    t.deepEqual(
      rect3.atNorm(r, 0, 0),
      { x: 0, y: 0, z: 2 },
      'should be at top left corner'
    )

    const rr = {
      basis: { a: 2, b: 0, x: 0, y: 0, z: 3 },
      size: { w: 10, h: 6 }
    }

    t.deepEqual(
      rect3.atNorm(rr, 0, 0),
      { x: 0, y: 0, z: 3 },
      'scale keeps origin'
    )

    t.deepEqual(
      rect3.atNorm(rr, 1, 1),
      { x: 20, y: 12, z: 3 },
      'should scale'
    )

    t.end()
  })
}
