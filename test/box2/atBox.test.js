const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic atBox', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 6 }

    t.deepEqual(
      box2.atBox(b, 0, 0),
      { x: 0, y: 0 },
      'should be at top left corner'
    )

    const bb = { a: 0, b: 1, x: 2, y: 0, w: 10, h: 6 }

    t.deepEqual(
      box2.atBox(bb, 2, 0),
      { x: 0, y: 0 },
      'rotation keeps origin'
    )

    t.deepEqual(
      box2.atBox(bb, 2, 1),
      { x: 1, y: 0 },
      'rotation should affect'
    )

    t.end()
  })
}
