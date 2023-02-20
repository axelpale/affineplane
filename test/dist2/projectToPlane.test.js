const dist2 = require('../../lib/dist2')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const d = 2
    const planea = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      dist2.projectTo(d, planea),
      d,
      'identity'
    )

    const planeb = { a: 0, b: 2, x: 100, y: 100, z: 100 }
    t.deepEqual(
      dist2.projectTo(d, planeb),
      1,
      'only scale should matter'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    const d = 2
    const planea = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const cameraa = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      dist2.projectTo(d, planea, cameraa),
      0,
      'camera at geometry depth'
    )

    const planeb = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerab = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      dist2.projectTo(d, planeb, camerab),
      1, // halved due perspective
      'camera away from projection plane'
    )

    const planec = { a: 3, b: 0, x: 0, y: 0, z: -2 }
    const camerac = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      dist2.projectTo(d, planec, camerac),
      1 / 3, // halved due perspective, thirded due plane scale
      'scaled projection plane'
    )

    t.end()
  })
}
