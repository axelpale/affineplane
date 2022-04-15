const affineplane = require('../../index')
const vector = affineplane.vector2

module.exports = (ts) => {
  ts.test('case: rotate zero vector', (t) => {
    t.vectorEqual(
      vector.rotateBy({ x: 0, y: 0 }, Math.PI),
      { x: 0, y: 0 }
    )

    t.vectorEqual(
      vector.rotateBy({ x: 0, y: 0 }, 0),
      { x: 0, y: 0 }
    )

    t.end()
  })

  ts.test('case: rotate unit vector', (t) => {
    t.vectorEqual(
      vector.rotateBy({ x: 1, y: 0 }, Math.PI),
      { x: -1, y: 0 }
    )

    t.vectorEqual(
      vector.rotateBy({ x: 1, y: 0 }, 2 * Math.PI),
      { x: 1, y: 0 }
    )

    t.vectorEqual(
      vector.rotateBy({ x: 1, y: 0 }, Math.PI / 2),
      { x: 0, y: 1 }
    )

    t.end()
  })
}
