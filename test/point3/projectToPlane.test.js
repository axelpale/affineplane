const point3 = require('../../lib/point3')
const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      point3.projectToPlane({ x: 3, y: 0, z: 0 }, plane),
      { x: 3, y: 0 }
    )

    const planeb = { a: 1, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      point3.projectToPlane({ x: 3, y: 0, z: 3 }, planeb),
      { x: 2, y: -2 }
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const camera = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      point3.projectToPlane({ x: 3, y: 0, z: 0 }, plane, camera),
      { x: 1, y: 1 },
      'camera at geometry depth'
    )

    const planeb = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerab = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      point3.projectToPlane({ x: 2, y: 0, z: 0 }, planeb, camerab),
      { x: 1, y: 0 },
      'camera away from projection plane'
    )

    const planec = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerac = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      point3.projectToPlane({ x: 6, y: 0, z: 2 }, planec, camerac),
      { x: 2, y: 0 },
      'point deeper than ref plane'
    )

    t.end()
  })

}
