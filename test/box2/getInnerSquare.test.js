const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic inner square', (t) => {
    const z = { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }
    t.deepEqual(box2.getInnerSquare(z), z, 'should be empty')

    const zw = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 0 }
    t.deepEqual(
      box2.getInnerSquare(zw),
      { a: 1, b: 0, x: 5, y: 0, w: 0, h: 0 },
      'should be empty and at the middle'
    )

    const r = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 10 }
    t.deepEqual(box2.getInnerSquare(r), r, 'should be itself')

    const rr = { a: 1, b: 0, x: 200, y: 200, w: 10, h: 6 }
    t.deepEqual(
      box2.getInnerSquare(rr),
      { a: 1, b: 0, x: 202, y: 200, w: 6, h: 6 },
      'should be square at the middle'
    )

    const rrr = { a: 0, b: 1, x: 200, y: 200, w: 10, h: 6 }
    t.deepEqual(
      box2.getInnerSquare(rrr),
      { a: 0, b: 1, x: 200, y: 202, w: 6, h: 6 },
      'should handle rotation and preserve box orientation'
    )

    t.end()
  })
}
