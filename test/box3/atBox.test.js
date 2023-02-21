const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic atBox', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 10, h: 6, d: 5 }

    t.deepEqual(
      box3.atBox(b, 0, 0, 0),
      { x: 0, y: 0, z: 0 },
      'should be at front top left corner'
    )
    t.deepEqual(
      box3.atBox(b, 10, 6, 5),
      { x: 10, y: 6, z: 5 },
      'should be at back bottom right corner'
    )

    const bb = { a: 0, b: 1, x: 2, y: 0, z: 1, w: 10, h: 6, d: 5 }

    t.deepEqual(
      box3.atBox(bb, 2, 0, 2),
      { x: 0, y: 0, z: 1 },
      'rotation keeps origin'
    )

    t.deepEqual(
      box3.atBox(bb, 2, 1, 2),
      { x: 1, y: 0, z: 1 },
      'rotation should affect'
    )

    t.end()
  })
}
