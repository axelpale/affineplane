const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic getPath', (t) => {
    const b = { a: 1, b: 0, x: 1, y: 2, w: 3, h: 4 }
    t.deepEqual(
      box2.getPath(b),
      [
        { x: 1, y: 2 },
        { x: 4, y: 2 },
        { x: 4, y: 6 },
        { x: 1, y: 6 }
      ],
      'four points'
    )

    const bb = { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 }
    t.deepEqual(
      box2.getPath(bb),
      [
        { x: 1, y: 2 },
        { x: 1, y: 5 },
        { x: -3, y: 5 },
        { x: -3, y: 2 }
      ],
      'rotated four points'
    )

    t.end()
  })
}
