const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: basic point collision', (t) => {
    t.true(
      circle3.hasPoint({ x: 0, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 0 }),
      'same origin collide'
    )

    t.false(
      circle3.hasPoint({ x: 1, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 0 }),
      'offset zero sphere does not collide'
    )

    t.true(
      circle3.hasPoint({ x: 1, y: 1, z: 1, r: 3 }, { x: 2, y: 2, z: 1 }),
      'point inside'
    )

    t.false(
      circle3.hasPoint({ x: 0, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 1 }),
      'point offset along z'
    )

    t.end()
  })
}
