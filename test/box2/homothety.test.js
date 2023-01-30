const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: basic box homothety', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }
    t.deepEqual(
      box2.homothety(b, { x: 0, y: 0 }, 1),
      b,
      'trivial: point at zero'
    )

    const bb = { a: 1, b: 0, x: 100, y: 200, w: 300, h: 400 }
    const bbmid = box2.atNorm(bb, 0.5, 0.5)
    t.deepEqual(
      box2.homothety(bb, bbmid, 0.5),
      { a: 1, b: 0, x: 175, y: 300, w: 150, h: 200 },
      'half towards middle'
    )

    t.end()
  })

  ts.test('case: invalid box homothety', (t) => {
    const bb = { a: 1, b: 0, x: 100, y: 200, w: 300, h: 400 }

    t.deepEqual(
      box2.homothety(bb, { x: 10, y: 20 }, 0),
      { a: 1, b: 0, x: 10, y: 20, w: 0, h: 0 },
      'zero factor makes the box point-like'
    )

    t.end()
  })
}
