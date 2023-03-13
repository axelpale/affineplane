const sphere2 = require('../../lib/sphere2')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic sphere rotate', (t) => {
    t.deepEqual(
      sphere2.rotateBy({ x: 0, y: 0, r: 0 }, { x: 0, y: 0 }, PI),
      { x: 0, y: 0, r: 0 },
      'origin at sphere center'
    )

    t.deepEqual(
      sphere2.rotateBy({ x: 200, y: 200, r: 100 }, { x: 0, y: 0 }, 0),
      { x: 200, y: 200, r: 100 },
      'zero rotation should not alter'
    )

    t.almostEqualSphere(
      sphere2.rotateBy({ x: 2, y: -2, r: 2 }, { x: 0, y: 0 }, PI),
      { x: -2, y: 2, r: 2 },
      'half turn around zero'
    )

    t.almostEqualSphere(
      sphere2.rotateBy({ x: 2, y: 2, r: 2 }, { x: 2, y: 0 }, PI),
      { x: 2, y: -2, r: 2 },
      'half turn'
    )

    t.end()
  })
}
