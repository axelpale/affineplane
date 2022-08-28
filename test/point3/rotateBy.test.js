const point3 = require('../../lib/point3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: trivial rotateBy', (t) => {
    const p = { x: 0, y: 0, z: 0 }
    const origin = { x: 0, y: 0, z: 0 }
    const roll = PI
    const pitch = PI
    t.almostEqual(point3.rotateBy(p, origin, roll, pitch), p, 'zero distance')

    const q = { x: 1, y: 0, z: 0 }
    t.almostEqual(point3.rotateBy(q, origin, 0, 0), q, 'zero angles')

    t.end()
  })

  ts.test('case: trivial pitch', (t) => {
    const p = { x: 1, y: 0, z: 0 }
    const origin = { x: 0, y: 0, z: 0 }
    const roll = PI
    const pitch = PI
    const q = { x: -1, y: 0, z: 0 }
    t.almostEqual(point3.rotateBy(p, origin, roll, pitch), q, 'effective roll')

    t.end()
  })

  ts.test('case: basic rotateBy', (t) => {
    const p = { x: 1, y: 0, z: 0 }
    const origin = { x: 0, y: 0, z: 0 }
    const roll = PI / 2
    const pitch = PI / 2
    const q = { x: 0, y: 0, z: 1 }
    t.almostEqual(point3.rotateBy(p, origin, roll, pitch), q, '90deg turns')

    const pitch2 = PI
    const q2 = { x: 0, y: -1, z: 0 }
    t.almostEqual(point3.rotateBy(p, origin, roll, pitch2), q2,
      '90deg roll + 180deg pitch')

    t.end()
  })

  ts.test('case: non-zero origin', (t) => {
    const p = { x: 0, y: 0, z: 0 }
    const origin = { x: 1, y: 1, z: 1 }
    const roll = PI / 2 // to (2,0,0)
    const pitch = PI / 2 // to (2,2,0)
    const q = { x: 2, y: 2, z: 0 }
    t.almostEqual(point3.rotateBy(p, origin, roll, pitch), q,
      '90deg turns by origin')

    t.end()
  })
}
