const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic difference', (t) => {
    let h, hh

    h = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    hh = { a: 1, b: 0, x: 2, y: 2, z: 2 }
    t.almostEqual(
      helm3.difference(h, hh),
      { a: 1, b: 0, x: -1, y: -1, z: -1 },
      'should work like vector difference'
    )

    h = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    hh = { a: 2, b: 0, x: 2, y: 2, z: 2 }
    t.almostEqual(
      helm3.difference(h, hh),
      { a: 0.5, b: 0, x: 0, y: 0, z: 0 },
      'should return transformation'
    )

    t.end()
  })
}
