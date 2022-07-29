const affineplane = require('../../index')
const vector = affineplane.vec2

module.exports = (ts) => {
  ts.test('case: basic averages', (t) => {
    t.deepEqual(
      vector.average([
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ]),
      {
        x: 0,
        y: 0
      }
    )

    t.deepEqual(
      vector.average([
        { x: 1, y: 1 },
        { x: 3, y: 3 }
      ]),
      {
        x: 2,
        y: 2
      }
    )

    t.end()
  })
}
