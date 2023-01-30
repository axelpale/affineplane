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

    const bb = { a: 0, b: 1, x: 0, y: 4, w: 10, h: 6 }

    t.deepEqual(
      box2.atNorm(bb, 0, 0),
      { x: 0, y: 4 },
      'rotation keeps origin'
    )

    t.deepEqual(
      box2.atNorm(bb, 1, 1),
      { x: -6, y: 14 },
      'size should not rotate'
    )

    t.end()
  })
}
