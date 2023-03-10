const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: basic collide', (t) => {
    t.true(
      sphere3.collide({ x: 0, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 0, r: 0 }),
      'zero spheres collide'
    )

    t.false(
      sphere3.collide({ x: 0, y: 0, z: 1, r: 0 }, { x: 0, y: 0, z: 0, r: 0 }),
      'offset zero spheres do not collide'
    )

    t.true(
      sphere3.collide({ x: 0, y: 0, z: 1, r: 1 }, { x: 0, y: 0, z: -1, r: 1 }),
      'spheres touch'
    )

    t.false(
      sphere3.collide({ x: 0, y: 0, z: 2, r: 1 }, { x: 0, y: 0, z: -1, r: 1 }),
      'spheres do not touch'
    )

    t.end()
  })
}
