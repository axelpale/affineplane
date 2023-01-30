const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: basic box homothety', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, z: 0, w: 0, h: 0, d: 0 }
    t.deepEqual(
      box3.homothety(b, { x: 0, y: 0, z: 0 }, 1),
      b,
      'trivial: origin at zero'
    )

    const bb = { a: 1, b: 0, x: 100, y: 200, z: 300, w: 300, h: 400, d: 500 }
    const bbmid = box3.atNorm(bb, 0.5, 0.5, 0.5)
    t.deepEqual(bbmid, { x: 250, y: 400, z: 550 }, 'ensure middle point')
    t.deepEqual(
      box3.homothety(bb, bbmid, 0.5),
      { a: 1, b: 0, x: 175, y: 300, z: 425, w: 150, h: 200, d: 250 },
      'half towards middle'
    )

    const bbb = { a: 1, b: 0, x: 100, y: 200, z: 300, w: 300, h: 400, d: 500 }
    t.deepEqual(
      box3.homothety(bbb, { x: 10, y: 20, z: 30 }, 0),
      { a: 1, b: 0, x: 10, y: 20, z: 30, w: 0, h: 0, d: 0 },
      'zero factor makes the box point-like'
    )

    t.end()
  })
}
