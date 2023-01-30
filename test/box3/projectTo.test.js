const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 2, h: 4, d: 6 }
    const p = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      box3.projectTo(b, p),
      { a: 1, b: 0, x: 0, y: 0, w: 2, h: 4 },
      'trivial identity; lose z dimension'
    )

    const bb = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 2, h: 4, d: 6 }
    const pp = { a: 2, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      box3.projectTo(bb, pp),
      { a: 1, b: 0, x: -0.5, y: -1, w: 1, h: 2 },
      'should respect scale and translation'
    )

    t.end()
  })
}
