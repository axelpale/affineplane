const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 2, h: 4, d: 6 }
    const p = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      box3.projectTo(b, p),
      { a: 1, b: 0, x: 0, y: 0, w: 2, h: 4 },
      'trivial identity; lose z dimension'
    )

    const bb = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 2, h: 4, d: 6 }
    const pp = { a: 2, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      box3.projectTo(bb, pp),
      { a: 1, b: 0, x: -0.5, y: -1, w: 1, h: 2 },
      'should respect scale and translation'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    const b = { a: 1, b: 0, x: 3, y: 0, z: 1, w: 2, h: 4, d: 6 }
    const p = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const c = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      box3.projectTo(b, p, c),
      { a: 1, b: 0, x: 1, y: 1, w: 0, h: 0 },
      'camera at image depth'
    )

    const bb = { a: 1, b: 0, x: 2, y: 0, z: 2, w: 2, h: 4, d: 6 }
    const pp = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const cc = { x: 0, y: 0, z: -2 }
    t.deepEqual(
      box3.projectTo(bb, pp, cc),
      { a: 1, b: 0, x: 1, y: 0, w: 1, h: 2 },
      'image plane between the box and the camera'
    )

    const bbb = { a: 1, b: 0, x: 2, y: 0, z: 2, w: 2, h: 4, d: 6 }
    const ppp = { a: 2, b: 0, x: 0, y: 0, z: 0 }
    const ccc = { x: 0, y: 0, z: -2 }
    t.deepEqual(
      box3.projectTo(bbb, ppp, ccc),
      { a: 1, b: 0, x: 0.5, y: 0, w: 0.5, h: 1 },
      'scaled image plane between the box and the camera'
    )

    t.end()
  })
}
