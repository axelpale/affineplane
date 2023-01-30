const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic bounds', (t) => {
    const r = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 6, d: 3 }
    t.deepEqual(box3.getBounds(r), r, 'should be itself')

    const rr = { a: 1, b: 0, x: 200, y: 200, z: 200, w: 10, h: 6, d: 3 }
    t.deepEqual(box3.getBounds(rr), rr, 'should match translation')

    const rrr = { a: 0, b: 1, x: 200, y: 200, z: 200, w: 10, h: 6, d: 3 }
    t.deepEqual(
      box3.getBounds(rrr),
      { a: 1, b: 0, x: 194, y: 200, z: 200, w: 6, h: 10, d: 3 },
      'should handle rotation'
    )

    const rrrr = [
      { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 10, d: 10 },
      { a: 1, b: 0, x: 10, y: 10, z: 10, w: 20, h: 20, d: 20 },
      { a: 1, b: 0, x: 20, y: 20, z: 20, w: 30, h: 30, d: 30 }
    ]
    t.deepEqual(
      box3.getBounds(rrrr),
      { a: 1, b: 0, x: 0, y: 0, z: 0, w: 50, h: 50, d: 50 },
      'should handle multiple'
    )

    t.end()
  })

  ts.test('case: invalid bounds', (t) => {
    t.throws(() => {
      box3.getBounds([])
    }, 'should detect empty array of boxes')

    t.end()
  })
}
