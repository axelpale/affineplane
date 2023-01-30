const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic volume', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 6, d: 3 }

    t.equal(
      box3.getVolume(b),
      180,
      'should have correct volume'
    )

    const bb = { a: 0, b: 1, x: 10, y: 20, z: 30, w: 10, h: 6, d: 3 }

    t.equal(
      box3.getVolume(bb),
      180,
      'rotation should not affect volume'
    )

    t.end()
  })
}
