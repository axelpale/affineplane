const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic bounding sphere', (t) => {
    let box

    // Tip: see pythagorean quadruple
    box = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 2, h: 4, d: 4 }
    t.deepEqual(
      box3.getSphere(box),
      { x: 1, y: 2, z: 2, r: 3 },
      'should be correct sphere'
    )

    box = { a: 1, b: 0, x: 200, y: 200, z: 200, w: 2, h: 4, d: 4 }
    t.deepEqual(
      box3.getSphere(box),
      { x: 201, y: 202, z: 202, r: 3 },
      'should find box center'
    )

    box = { a: 1, b: 0, x: 1, y: 1, z: 1, w: 0, h: 0, d: 0 }
    t.deepEqual(
      box3.getSphere(box),
      { x: 1, y: 1, z: 1, r: 0 },
      'should handle empty box'
    )

    t.end()
  })
}
