const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic point collision', (t) => {
    t.true(
      sphere2.hasPoint({ x: 0, y: 0, r: 0 }, { x: 0, y: 0 }),
      'same origin collide'
    )

    t.false(
      sphere2.hasPoint({ x: 1, y: 0, r: 0 }, { x: 0, y: 0 }),
      'offset zero sphere does not collide'
    )

    t.true(
      sphere2.hasPoint({ x: 1, y: 1, r: 3 }, { x: 2, y: 2 }),
      'point inside'
    )

    t.end()
  })
}
