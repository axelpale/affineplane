const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: basic homothety', (t) => {
    t.deepEqual(
      point2.homothety({ x: 0, y: 0 }, { x: 0, y: 0 }, 1),
      { x: 0, y: 0 },
      'point and center the same'
    )

    t.deepEqual(
      point2.homothety({ x: 200, y: 200 }, { x: 0, y: 0 }, 0),
      { x: 0, y: 0 },
      'zero factor towards zero'
    )

    t.deepEqual(
      point2.homothety({ x: 200, y: 200 }, { x: 1, y: 1 }, 0),
      { x: 1, y: 1 },
      'zero factor towards non-zero'
    )

    t.deepEqual(
      point2.homothety({ x: 2, y: -2 }, { x: 0, y: 0 }, 0.5),
      { x: 1, y: -1 },
      'half'
    )

    t.deepEqual(
      point2.homothety({ x: 2, y: 2 }, { x: 2, y: 0 }, 0.5),
      { x: 2, y: 1 },
      'half along y axis'
    )

    t.end()
  })
}
