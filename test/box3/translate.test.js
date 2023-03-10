const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: basic box translate', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }
    t.deepEqual(
      box3.translate(b, { x: 10, y: 20, z: 30 }),
      { a: 1, b: 0, x: 10, y: 20, z: 30, w: 0, h: 0, d: 0 },
      'trivial'
    )

    t.end()
  })
}
