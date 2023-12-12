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

  ts.test('case: basic bounding circle', (t) => {
    t.deepEqual(
      circle3.boundingCircle([{ x: 0, y: 0, z: 0, r: 0 }]),
      { x: 0, y: 0, z: 0, r: 0 },
      'should be zero circle'
    )

    t.deepEqual(
      circle3.boundingCircle([{ x: 0, y: 0, z: 0, r: 1 }]),
      { x: 0, y: 0, z: 0, r: 1 },
      'bounding circle of single circle should be self'
    )

    t.deepEqual(
      circle3.boundingCircle([
        { x: -1, y: 0, z: 0, r: 1 },
        { x: 1, y: 0, z: 1, r: 1 }
      ]),
      { x: 0, y: 0, z: 1, r: 2 },
      'should be perfect bounding circle on largest z'
    )

    t.end()
  })
}
