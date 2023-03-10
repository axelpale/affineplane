const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: basic translateBy', (t) => {
    const b = { a: 1, b: 0, x: 1, y: 2, z: 3, w: 0, h: 0, d: 0 }
    t.deepEqual(
      box3.translateBy(b, 10, 20, 30),
      { a: 1, b: 0, x: 11, y: 22, z: 33, w: 0, h: 0, d: 0 },
      'trivial'
    )

    t.end()
  })
}
