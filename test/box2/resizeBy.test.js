const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: basic resizeBy', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }
    t.deepEqual(
      box2.resizeBy(b, { x: 0, y: 0 }, 0, 0),
      b,
      'trivial identity'
    )

    const bb = { a: 1, b: 0, x: 100, y: 200, w: 300, h: 400 }
    t.deepEqual(
      box2.resizeBy(bb, { x: 0, y: 0 }, -300, -400),
      { a: 1, b: 0, x: 100, y: 200, w: 0, h: 0 },
      'empty box'
    )

    t.deepEqual(
      box2.resizeBy(bb, { x: 0, y: 0 }, 10, 20),
      box2.resizeBy(bb, { x: 100, y: 200 }, 10, 20),
      'should limit origin'
    )

    t.deepEqual(
      box2.resizeBy(bb, { x: 400, y: 600 }, 10, 20),
      { a: 1, b: 0, x: 90, y: 180, w: 310, h: 420 },
      'should resize about bottom right corner'
    )

    t.deepEqual(
      box2.resizeBy(bb, { x: 250, y: 400 }, 10, 20),
      { a: 1, b: 0, x: 95, y: 190, w: 310, h: 420 },
      'should resize about center'
    )

    t.end()
  })
}
