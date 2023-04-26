const scalar2 = require('../../lib/scalar2')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const ss = 2
    const planea = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      scalar2.projectToPlane(ss, planea),
      ss,
      'identity'
    )

    const planeb = { a: 0, b: 2, x: 100, y: 100, z: 100 }
    t.deepEqual(
      scalar2.projectToPlane(ss, planeb),
      0.5,
      'only scale should matter'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    const ss = 2
    const planea = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const cameraa = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      scalar2.projectToPlane(ss, planea, cameraa),
      0,
      'camera at geometry depth'
    )

    const planeb = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerab = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      scalar2.projectToPlane(ss, planeb, camerab),
      0.5, // quartered due perspective
      'camera away from projection plane'
    )

    const planec = { a: 3, b: 0, x: 0, y: 0, z: -2 }
    const camerac = { x: 0, y: 0, z: -4 }
    t.almostEqual(
      scalar2.projectToPlane(ss, planec, camerac),
      1 / 18, // 1/4 due perspective, 1/9 due plane scale. 2 Initially.
      'scaled projection plane'
    )

    t.end()
  })
}
