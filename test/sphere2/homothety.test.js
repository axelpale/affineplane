const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic homothety', (t) => {
    t.deepEqual(
      sphere2.homothety({ x: 0, y: 0, r: 0 }, { x: 0, y: 0 }, 1),
      { x: 0, y: 0, r: 0 },
      'origin at sphere center'
    )

    t.deepEqual(
      sphere2.homothety({ x: 200, y: 200, r: 100 }, { x: 0, y: 0 }, 0),
      { x: 0, y: 0, r: 0 },
      'zero factor towards zero'
    )

    t.deepEqual(
      sphere2.homothety({ x: 200, y: 200, r: 100 }, { x: 1, y: 1 }, 0),
      { x: 1, y: 1, r: 0 },
      'zero factor towards non-zero'
    )

    t.deepEqual(
      sphere2.homothety({ x: 2, y: -2, r: 2 }, { x: 0, y: 0 }, 0.5),
      { x: 1, y: -1, r: 1 },
      'half'
    )

    t.deepEqual(
      sphere2.homothety({ x: 2, y: 2, r: 2 }, { x: 2, y: 0 }, 0.5),
      { x: 2, y: 1, r: 1 },
      'half along y axis'
    )

    t.end()
  })
}
