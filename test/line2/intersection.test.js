const fine = require('../../')
const line2 = fine.line2

module.exports = (ts) => {
  ts.test('case: basic line intersection', (t) => {
    let l, ll

    l = {
      origin: { x: 0, y: 0 },
      span: { x: 1, y: 0 }
    }

    t.deepEqual(
      line2.intersection(l, l),
      l.origin,
      'same line should intersect at origin'
    )

    l = {
      origin: { x: 1, y: 0 },
      span: { x: 0, y: 1 }
    }
    ll = {
      origin: { x: 0, y: 2 },
      span: { x: 1, y: 0 }
    }

    t.deepEqual(
      line2.intersection(l, ll),
      { x: 1, y: 2 },
      'perpendicular lines'
    )

    l = {
      origin: { x: 1, y: 0 },
      span: { x: 0, y: 1 }
    }
    ll = {
      origin: { x: 2, y: 0 },
      span: { x: 0, y: 1 }
    }

    t.deepEqual(
      line2.intersection(l, ll),
      null,
      'parallel'
    )

    t.end()
  })
}
