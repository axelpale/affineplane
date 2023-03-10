const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: basic box translate', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }
    t.deepEqual(
      box2.translate(b, { x: 10, y: 20 }),
      { a: 1, b: 0, x: 10, y: 20, w: 0, h: 0 },
      'trivial'
    )

    t.end()
  })
}
