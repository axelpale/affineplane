const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic box getSegments', (t) => {
    const b = { a: 1, b: 0, x: 1, y: 2, w: 3, h: 4 }

    t.deepEqual(
      box2.getSegments(b),
      [
        [{ x: 1, y: 2 }, { x: 4, y: 2 }],
        [{ x: 4, y: 2 }, { x: 4, y: 6 }],
        [{ x: 4, y: 6 }, { x: 1, y: 6 }],
        [{ x: 1, y: 6 }, { x: 1, y: 2 }]
      ],
      'should have correct corners'
    )

    t.end()
  })
}
