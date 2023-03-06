const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic collide', (t) => {
    t.true(
      sphere2.collide({ x: 0, y: 0, r: 0 }, { x: 0, y: 0, r: 0 }),
      'zero spheres collide'
    )

    t.false(
      sphere2.collide({ x: 1, y: 0, r: 0 }, { x: 0, y: 0, r: 0 }),
      'offset zero spheres do not collide'
    )

    t.end()
  })
}
