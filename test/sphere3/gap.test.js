const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: basic gap', (t) => {
    t.equal(
      sphere3.gap({ x: 0, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 0, r: 0 }),
      0,
      'zero spheres'
    )

    t.equal(
      sphere3.gap({ x: 1, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 0, r: 0 }),
      1,
      'offset zero spheres'
    )

    t.equal(
      sphere3.gap({ x: 2, y: 2, z: 0, r: 1 }, { x: 5, y: 2, z: 0, r: 1 }),
      1,
      'offset zero spheres'
    )

    t.end()
  })
}
