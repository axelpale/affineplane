const sphere2 = require('../../index').sphere2

module.exports = (ts) => {
  ts.test('case: basic sphere bounding box', (t) => {
    t.almostEqualBox(
      sphere2.boundingBox({ x: 0, y: 0, r: 0 }),
      { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 },
      'trivial empty box'
    )

    t.almostEqualBox(
      sphere2.boundingBox({ x: 2, y: 2, r: 2 }),
      { a: 1, b: 0, x: 0, y: 0, w: 4, h: 4 },
      'should have size double the radius'
    )

    t.end()
  })
}
