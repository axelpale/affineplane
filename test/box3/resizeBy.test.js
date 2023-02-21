const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: basic resizeBy', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }
    t.deepEqual(
      box3.resizeBy(b, { x: 0, y: 0, z: 0 }, 0, 0, 0),
      b,
      'trivial identity'
    )

    const bb = { a: 1, b: 0, x: 100, y: 200, z: 300, w: 300, h: 400, d: 500 }
    t.deepEqual(
      box3.resizeBy(bb, { x: 0, y: 0, z: 0 }, -300, -400, -500),
      { a: 1, b: 0, x: 100, y: 200, z: 300, w: 0, h: 0, d: 0 },
      'empty box'
    )

    t.deepEqual(
      box3.resizeBy(bb, { x: 0, y: 0, z: 0 }, 10, 20, 30),
      box3.resizeBy(bb, { x: 100, y: 200, z: 300 }, 10, 20, 30),
      'should limit origin'
    )

    t.deepEqual(
      box3.resizeBy(bb, { x: 400, y: 600, z: 800 }, 10, 20, 30),
      { a: 1, b: 0, x: 90, y: 180, z: 270, w: 310, h: 420, d: 530 },
      'should resize about bottom right corner'
    )

    t.deepEqual(
      box3.resizeBy(bb, { x: 250, y: 400, z: 550 }, 10, 20, 30),
      { a: 1, b: 0, x: 95, y: 190, z: 285, w: 310, h: 420, d: 530 },
      'should resize about center'
    )

    t.end()
  })
}
