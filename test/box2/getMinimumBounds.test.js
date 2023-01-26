const affineplane = require('../../index')
const box2 = affineplane.box2
const leg45 = Math.sqrt(2) / 2

module.exports = (ts) => {
  ts.test('case: basic minimum bounds', (t) => {
    const r = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 6 }
    t.almostEqualBox(box2.getMinimumBounds([r]), r, 'should be itself')

    const rr = [
      { a: 1, b: 0, x: 1, y: 1, w: 0, h: 0 },
      { a: 1, b: 0, x: 4, y: 4, w: 0, h: 0 }
    ]
    t.almostEqualBox(
      box2.getMinimumBounds(rr),
      { a: leg45, b: leg45, x: 1, y: 1, w: Math.sqrt(18), h: 0 },
      'should find 45 degrees'
    )

    const rrr = { a: leg45, b: leg45, x: 5, y: 5, w: 10, h: 6 }
    t.almostEqualBox(box2.getMinimumBounds(rrr), rrr, 'allow single')

    t.end()
  })

  ts.test('case: invalid bounds', (t) => {
    t.throws(() => {
      box2.getMinimumBounds([])
    }, 'should detect empty array of boxes')

    t.end()
  })
}
