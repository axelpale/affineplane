const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic gap', (t) => {
    t.equal(
      sphere2.gap({ x: 0, y: 0, r: 0 }, { x: 0, y: 0, r: 0 }),
      0,
      'zero spheres'
    )

    t.equal(
      sphere2.gap({ x: 1, y: 0, r: 0 }, { x: 0, y: 0, r: 0 }),
      1,
      'offset zero spheres'
    )

    t.equal(
      sphere2.gap({ x: 2, y: 2, r: 1 }, { x: 5, y: 2, r: 1 }),
      1,
      'offset zero spheres'
    )

    t.equal(
      sphere2.gap({ x: 0, y: 0, r: 1 }, { x: 3, y: 4 }),
      4,
      'should gap to point'
    )

    t.end()
  })
}
