const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: basic rotateBy', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }
    t.almostEqualBox(
      box2.rotateBy(b, { x: 0, y: 0 }, Math.PI),
      { a: -1, b: 0, x: 0, y: 0, w: 0, h: 0 },
      'trivial'
    )

    const bb = { a: 0, b: 1, x: 10, y: 10, w: 30, h: 20 }
    t.almostEqualBox(
      box2.rotateBy(bb, { x: 10, y: 10 }, Math.PI / 2),
      { a: -1, b: 0, x: 10, y: 10, w: 30, h: 20 },
      'should rotate around point'
    )

    const bbb = { a: 0, b: 1, x: 10, y: 10, w: 30, h: 20 }
    t.almostEqualBox(
      box2.rotateBy(bbb, { x: 40, y: 30 }, Math.PI / 2),
      { a: -1, b: 0, x: 60, y: 0, w: 30, h: 20 },
      'should rotate around bottom right'
    )

    t.end()
  })
}
