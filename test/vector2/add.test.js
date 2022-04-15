const affineplane = require('../../index')
const vector2 = affineplane.vector2

module.exports = (ts) => {
  ts.test('case: zeroes and ones', (t) => {
    t.deepEqual(
      vector2.add(
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ),
      {
        x: 0,
        y: 0
      }
    )

    t.deepEqual(
      vector2.add(
        { x: 1, y: 1 },
        { x: 1, y: 1 }
      ),
      {
        x: 2,
        y: 2
      }
    )

    t.end()
  })
}
