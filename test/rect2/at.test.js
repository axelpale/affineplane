const affineplane = require('../../index')
const rect2 = affineplane.rect2

module.exports = (ts) => {
  ts.test('case: basic at', (t) => {
    const r = {
      basis: { a: 1, b: 0, x: 0, y: 0 },
      size: { w: 10, h: 6 }
    }

    t.deepEqual(
      rect2.at(r, 0, 0),
      { x: 0, y: 0 },
      'should be at top left corner'
    )

    const rr = {
      basis: { a: 2, b: 0, x: 0, y: 0 },
      size: { w: 10, h: 6 }
    }

    t.deepEqual(
      rect2.at(rr, 0, 0),
      { x: 0, y: 0 },
      'scale keeps origin'
    )

    t.deepEqual(
      rect2.at(rr, 1, 1),
      { x: 2, y: 2 },
      'should scale'
    )

    t.end()
  })
}
