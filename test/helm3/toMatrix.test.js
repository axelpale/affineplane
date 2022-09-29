const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    t.deepEqual(
      helm3.toMatrix({ a: 1, b: 2, x: 3, y: 4, z: 5 }),
      {
        a1: 1,
        a2: -2,
        a3: 0,
        a4: 3,
        b1: 2,
        b2: 1,
        b3: 0,
        b4: 4,
        c1: 0,
        c2: 0,
        c3: Math.sqrt(5),
        c4: 5,
        d1: 0,
        d2: 0,
        d3: 0,
        d4: 1
      },
      'valid'
    )

    t.end()
  })
}
