const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 2, h: 4 }
    const p = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      box2.projectTo(b, p),
      b,
      'trivial identity'
    )

    const bb = { a: 1, b: 0, x: 0, y: 0, w: 2, h: 4 }
    const pp = { a: 1, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      box2.projectTo(bb, pp),
      { a: 1, b: 0, x: -1, y: -2, w: 2, h: 4 },
      'should respect translation'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {

    const b = { a: 1, b: 0, x: 3, y: 0, w: 2, h: 4 }
    const p = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const c = { x: 1, y: 1, z: 0 }
    t.throws(() => {
      box2.projectTo(b, p, c)
    }, 'camera at image depth')

    const bb = { a: 1, b: 0, x: 2, y: 0, w: 2, h: 4 }
    const pp = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const cc = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      box2.projectTo(bb, pp, cc),
      { a: 0.5, b: 0, x: 1, y: 0, w: 1, h: 2 },
      'image plane between the box and the camera'
    )

    const bbb = { a: 1, b: 0, x: 2, y: 0, w: 2, h: 4 }
    const ppp = { a: 2, b: 0, x: 0, y: 0, z: -2 }
    const ccc = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      box2.projectTo(bbb, ppp, ccc),
      { a: 0.25, b: 0, x: 0.5, y: 0, w: 0.5, h: 1 },
      'scaled image plane between the box and the camera'
    )

    t.end()
  })
}
