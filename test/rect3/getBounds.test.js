const affineplane = require('../../index')
const rect3 = affineplane.rect3

module.exports = (ts) => {
  ts.test('case: basic bounds', (t) => {
    const r = {
      basis: { a: 1, b: 0, x: 0, y: 0, z: 2 },
      size: { w: 10, h: 6 }
    }

    t.deepEqual(
      rect3.getBounds(r),
      r,
      'should be itself'
    )

    const rr = {
      basis: { a: 2, b: 0, x: 200, y: 200, z: 20 },
      size: { w: 10, h: 6 }
    }

    t.deepEqual(
      rect3.getBounds(rr),
      {
        basis: { a: 1, b: 0, x: 200, y: 200, z: 20 },
        size: { w: 20, h: 12 }
      },
      'should match translation'
    )

    const rrr = {
      basis: { a: 0, b: 1, x: 200, y: 200, z: 20 },
      size: { w: 10, h: 6 }
    }

    t.deepEqual(
      rect3.getBounds(rrr),
      {
        basis: { a: 1, b: 0, x: 194, y: 200, z: 20 },
        size: { w: 6, h: 10 }
      },
      'should handle rotation'
    )

    t.end()
  })
}
