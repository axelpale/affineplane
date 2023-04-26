const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: basic transit from plane', (t) => {
    let circle, plane

    circle = { x: 2, y: 3, z: 4, r: 4 }
    plane = { a: 1, b: 0, x: 2, y: 3, z: 4 }
    t.deepEqual(
      circle3.transitFrom(circle, plane),
      { x: 4, y: 6, z: 8, r: 4 },
      'translation'
    )

    circle = { x: 2, y: 3, z: 4, r: 4 }
    plane = { a: 2, b: 0, x: 2, y: 3, z: 4 }
    t.deepEqual(
      circle3.transitFrom(circle, plane),
      { x: 6, y: 9, z: 12, r: 8 },
      'scaling and translation'
    )

    t.end()
  })

  ts.test('case: basic transit to plane', (t) => {
    t.deepEqual(circle3.transitTo(
      { x: 20, y: 30, z: 40, r: 40 },
      { a: 1, b: 0, x: 20, y: 30, z: 40 }
    ), { x: 0, y: 0, z: 0, r: 40 })

    t.end()
  })
}
