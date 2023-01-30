const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic atNorm', (t) => {
    const b = { a: 1, b: 0, x: 2, y: 3, z: 4, w: 10, h: 6, d: 3 }

    t.deepEqual(
      box3.atNorm(b, 0, 0, 0),
      { x: 2, y: 3, z: 4 },
      'should be at front top left corner'
    )

    t.deepEqual(
      box3.atNorm(b, 1, 1, 1),
      { x: 12, y: 9, z: 7 },
      'should be at back bottom right corner'
    )

    const bb = { a: 0, b: 1, x: 2, y: 3, z: 4, w: 10, h: 6, d: 3 }

    t.deepEqual(
      box3.atNorm(bb, 0, 0, 0),
      { x: 2, y: 3, z: 4 },
      'rotation keeps origin'
    )

    t.deepEqual(
      box3.atNorm(bb, 1, 1, 1),
      { x: -4, y: 13, z: 7 },
      'sizes should not rotate'
    )

    t.end()
  })
}
