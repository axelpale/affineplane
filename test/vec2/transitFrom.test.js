const vec2 = require('../../lib/vec2')

module.exports = (ts) => {
  ts.test('case: basic transit from plane', (t) => {
    const plane = { a: 1, b: 0, x: 2, y: 3 }

    t.deepEqual(
      vec2.transitFrom({ x: 2, y: 3 }, plane),
      { x: 2, y: 3 },
      'translation should not affect'
    )

    const planeb = { a: 0, b: 2, x: 2, y: 3 }
    t.deepEqual(
      vec2.transitFrom({ x: 2, y: 3 }, planeb),
      { x: -6, y: 4 },
      'scaling x2 and rotation 90deg'
    )

    t.end()
  })
}
