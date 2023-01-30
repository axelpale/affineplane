const affineplane = require('../../index')
const box3 = affineplane.box3
const leg45 = Math.sqrt(2) / 2

module.exports = (ts) => {
  ts.test('case: basic minimum bounds', (t) => {
    const r = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 6, d: 3 }
    t.almostEqualBox(box3.getMinimumBounds([r]), r, 'should be itself')

    const rr = [
      { a: 1, b: 0, x: 1, y: 1, z: 1, w: 0, h: 0, d: 0 },
      { a: 1, b: 0, x: 4, y: 4, z: 4, w: 0, h: 0, d: 0 }
    ]
    t.almostEqualBox(
      box3.getMinimumBounds(rr),
      { a: leg45, b: leg45, x: 1, y: 1, z: 1, w: Math.sqrt(18), h: 0, d: 3 },
      'should find 45 degrees and depth'
    )

    const rrr = { a: leg45, b: leg45, x: 5, y: 5, z: 5, w: 10, h: 6, d: 3 }
    t.almostEqualBox(box3.getMinimumBounds(rrr), rrr, 'allow single')

    t.end()
  })

  ts.test('case: invalid bounds', (t) => {
    t.throws(() => {
      box3.getMinimumBounds([])
    }, 'should detect empty array of boxes')

    t.end()
  })
}
