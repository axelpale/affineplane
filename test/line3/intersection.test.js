const fine = require('../../')
const line3 = fine.line3

module.exports = (ts) => {
  ts.test('case: basic line intersection', (t) => {
    let l, ll

    l = {
      origin: { x: 0, y: 0, z: 0 },
      span: { x: 1, y: 0, z: 1 }
    }

    t.deepEqual(
      line3.intersection(l, l),
      l.origin,
      'same line should intersect at origin'
    )

    l = {
      origin: { x: 1, y: 0, z: 0 },
      span: { x: 0, y: 1, z: 0 }
    }
    ll = {
      origin: { x: 0, y: 2, z: 0 },
      span: { x: 1, y: 0, z: 0 }
    }

    t.deepEqual(
      line3.intersection(l, ll),
      { x: 1, y: 2, z: 0 },
      'perpendicular lines that intersect'
    )

    l = {
      origin: { x: 1, y: 0, z: 0 },
      span: { x: 0, y: 1, z: 0 }
    }
    ll = {
      origin: { x: 0, y: 2, z: 1 },
      span: { x: 1, y: 0, z: 1 }
    }

    t.deepEqual(
      line3.intersection(l, ll),
      null,
      'skew lines do not intersect'
    )

    l = {
      origin: { x: 1, y: 0, z: 0 },
      span: { x: 0, y: 1, z: 0 }
    }
    ll = {
      origin: { x: 2, y: 0, z: 0 },
      span: { x: 0, y: 1, z: 0 }
    }

    t.deepEqual(
      line3.intersection(l, ll),
      null,
      'parallel'
    )

    t.end()
  })
}
