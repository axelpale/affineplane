const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: basic bounding box', (t) => {
    t.deepEqual(
      circle3.boundingBox({ x: 0, y: 0, z: 0, r: 0 }),
      { a: 1, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 },
      'should be zero box'
    )

    t.deepEqual(
      circle3.boundingBox({ x: 0, y: 0, z: 0, r: 1 }),
      { a: 1, b: 0, x: -1, y: -1, z: 0, w: 2, h: 2, d: 0 },
      'should be correct box'
    )

    t.end()
  })
}
