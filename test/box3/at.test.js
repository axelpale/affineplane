const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic at', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 6, d: 3 }

    t.deepEqual(
      box3.at(b, 0, 0, 0),
      { x: 0, y: 0, z: 0 },
      'should be at front top left corner'
    )

    const bb = { a: 0, b: 1, x: 2, y: 0, z: 1, w: 10, h: 6, d: 3 }

    t.deepEqual(
      box3.at(bb, 0, 0, 0),
      { x: 2, y: 0, z: 1 },
      'rotation keeps origin'
    )

    t.deepEqual(
      box3.at(bb, 2, 1, 3),
      { x: 1, y: 2, z: 4 },
      'rotation should affect x and y'
    )

    t.end()
  })
}
