const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic bounds', (t) => {
    const r = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 6 }

    t.deepEqual(box2.getBounds(r), r, 'should be itself')

    const rr = { a: 1, b: 0, x: 200, y: 200, w: 10, h: 6 }

    t.deepEqual(
      box2.getBounds(rr),
      { a: 1, b: 0, x: 200, y: 200, w: 10, h: 6 },
      'should match translation'
    )

    const rrr = { a: 0, b: 1, x: 200, y: 200, w: 10, h: 6 }

    t.deepEqual(
      box2.getBounds(rrr),
      { a: 1, b: 0, x: 194, y: 200, w: 6, h: 10 },
      'should handle rotation'
    )

    t.end()
  })

  ts.test('case: invalid bounds', (t) => {
    t.throws(() => {
      box2.getBounds([])
    }, 'should detect empty array of boxes')

    t.end()
  })
}
