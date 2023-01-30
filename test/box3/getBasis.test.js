const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic getBasis', (t) => {
    const b = { a: 1, b: 0, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 }
    t.deepEqual(
      box3.getBasis(b),
      { a: 1, b: 0, x: 1, y: 2, z: 3 },
      'should be a basis'
    )

    const bb = { a: 0, b: 1, x: 1, y: 2, z: 3, w: 3, h: 4, d: 5 }
    t.deepEqual(
      box3.getBasis(bb),
      { a: 0, b: 1, x: 1, y: 2, z: 3 },
      'rotated basis'
    )

    t.end()
  })
}
