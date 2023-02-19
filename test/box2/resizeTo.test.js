const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: basic resizeTo', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }
    t.deepEqual(
      box2.resizeTo(b, { x: 0, y: 0 }, 0, 0),
      b,
      'trivial identity'
    )

    const bb = { a: 1, b: 0, x: 100, y: 200, w: 300, h: 400 }
    t.deepEqual(
      box2.resizeTo(bb, { x: 250, y: 400 }, 0, 0),
      { a: 1, b: 0, x: 250, y: 400, w: 0, h: 0 },
      'empty box at center'
    )

    t.deepEqual(
      box2.resizeTo(bb, { x: 0, y: 0 }, 10, 20),
      box2.resizeTo(bb, { x: 100, y: 200 }, 10, 20),
      'should limit origin'
    )

    // TODO
    // const bbb = { a: 1, b: 0, x: 100, y: 200, w: 100, h: 200 }
    // t.deepEqual(
    //   box2.resizeTo(bbb, { x: 0, y: 0 }, -100, -300),
    //   { a: 1, b: 0, x: 0, y: -100, w: 100, h: 300 },
    //   'should deal with negative size'
    // )

    t.end()
  })
}
