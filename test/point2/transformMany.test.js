const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: basic transformMany points', (t) => {
    const helm = { a: 0, b: 2, x: 10, y: 20 }
    const points = [
      { x: 0, y: 0 },
      { x: 1, y: 2 }
    ]

    t.deepEqual(
      point2.transformMany(points, helm),
      [
        { x: 10, y: 20 },
        { x: 6, y: 22 }
      ],
      'should dilate, rotate and translate'
    )

    t.end()
  })
}
