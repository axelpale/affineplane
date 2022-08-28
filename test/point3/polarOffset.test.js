const point3 = require('../../lib/point3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic polar offset', (t) => {
    const p = { x: 0, y: 0, z: 0 }
    const q = { x: -1, y: 0, z: 0 }
    t.almostEqual(point3.polarOffset(p, 1, PI), q)

    // Pitch should not affect
    t.almostEqual(point3.polarOffset(p, 1, PI, PI), q, 'half pitch')
    t.almostEqual(point3.polarOffset(p, 1, PI, PI / 2), q, 'quarter pitch')

    // Meta-test
    t.almostEqual(p, p)
    t.notAlmostEqual(p, q)

    t.end()
  })

  ts.test('case: angles', (t) => {
    const p = { x: 0, y: 0, z: 0 }
    const poff = point3.polarOffset

    // Roll
    t.almostEqual(poff(p, 1, PI / 2), { x: 0, y: 1, z: 0 })
    t.almostEqual(poff(p, 1, PI), { x: -1, y: 0, z: 0 })
    t.almostEqual(poff(p, 1, 3 * PI / 2), { x: 0, y: -1, z: 0 })

    // Pitch
    t.almostEqual(poff(p, 1, 0, PI), { x: 1, y: 0, z: 0 })
    t.almostEqual(poff(p, 1, PI / 2, PI), { x: 0, y: -1, z: 0 })
    t.almostEqual(poff(p, 1, PI / 2, PI / 2), { x: 0, y: 0, z: 1 })

    t.end()
  })
}
