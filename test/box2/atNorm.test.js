const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic atNorm', (t) => {
    const b = { a: 1, b: 0, x: 2, y: 3, w: 10, h: 6 }

    t.deepEqual(
      box2.atNorm(b, 0, 0),
      { x: 2, y: 3 },
      'should be at top left corner'
    )

    t.deepEqual(
      box2.atNorm(b, 1, 1),
      { x: 12, y: 9 },
      'should be at bottom right corner'
    )

    const bb = { a: 2, b: 0, x: 0, y: 0, w: 10, h: 6 }

    t.deepEqual(
      box2.atNorm(bb, 0, 0),
      { x: 0, y: 0 },
      'scale keeps origin'
    )

    t.deepEqual(
      box2.atNorm(bb, 1, 1),
      { x: 10, y: 6 },
      'size should not scale'
    )

    t.end()
  })
}
