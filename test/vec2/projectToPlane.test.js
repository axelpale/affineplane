const vec2 = require('../../lib/vec2')
const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      vec2.projectToPlane({ x: 3, y: 0 }, plane),
      { x: 3, y: 0 },
      'identity plane'
    )

    const planeb = { a: 2, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      vec2.projectToPlane({ x: 4, y: 0 }, planeb),
      { x: 2, y: 0 },
      'only plane scaling affects'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const camera = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      vec2.projectToPlane({ x: 3, y: 0 }, plane, camera),
      { x: 0, y: 0 },
      'camera at geometry depth thus vector becomes infinite'
    )

    const planeb = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerab = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      vec2.projectToPlane({ x: 2, y: 0 }, planeb, camerab),
      { x: 1, y: 0 },
      'the projection plane between vector and camera'
    )

    const planec = { a: 3, b: 0, x: 0, y: 0, z: -2 }
    const camerac = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      vec2.projectToPlane({ x: 6, y: 0 }, planec, camerac),
      { x: 1, y: 0 },
      'scaled projection plane'
    )

    t.end()
  })

}
