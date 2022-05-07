const affineplane = require('../../index')
const vector2 = affineplane.vector2

module.exports = (ts) => {
  ts.test('case: zero vector', (t) => {
    t.deepEqual(
      vector2.toPolar({ x: 0, y: 0 }),
      {
        magnitude: 0,
        direction: 0
      }
    )

    t.end()
  })

  ts.test('case: unit vector', (t) => {
    t.deepEqual(
      vector2.toPolar({ x: 1, y: 0 }),
      {
        magnitude: 1,
        direction: 0
      }
    )

    t.deepEqual(
      vector2.toPolar({ x: 0, y: 1 }),
      {
        magnitude: 1,
        direction: Math.PI / 2
      }
    )

    t.end()
  })
}
