const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic transit from plane', (t) => {
    let plane

    plane = { a: 1, b: 0, x: 2, y: 3 }
    t.deepEqual(
      sphere2.transitFrom({ x: 2, y: 3, r: 4 }, plane),
      { x: 4, y: 6, r: 4 },
      'translation'
    )

    plane = { a: 2, b: 0, x: 2, y: 3 }
    t.deepEqual(
      sphere2.transitFrom({ x: 2, y: 3, r: 4 }, plane),
      { x: 6, y: 9, r: 8 },
      'scaling and translation'
    )

    t.end()
  })
}
