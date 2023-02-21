const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: basic resizeTo', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }
    t.deepEqual(
      box3.resizeTo(b, { x: 0, y: 0, z: 0 }, 0, 0, 0),
      b,
      'trivial identity'
    )

    const bb = { a: 1, b: 0, x: 100, y: 200, z: 300, w: 300, h: 400, d: 500 }
    t.deepEqual(
      box3.resizeTo(bb, { x: 250, y: 400, z: 550 }, 0, 0, 0),
      { a: 1, b: 0, x: 250, y: 400, z: 550, w: 0, h: 0, d: 0 },
      'empty box at center'
    )

    t.deepEqual(
      box3.resizeTo(bb, { x: 0, y: 0, z: 0 }, 10, 20, 30),
      box3.resizeTo(bb, { x: 100, y: 200, z: 300 }, 10, 20, 30),
      'should limit origin'
    )

    t.end()
  })
}
