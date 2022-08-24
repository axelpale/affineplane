const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic helm2 transit to plane', (t) => {
    let tr, plane

    tr = { a: 2, b: 0, x: 20, y: 30 }
    plane = { a: 2, b: 0, x: 20, y: 30 }
    t.deepEqual(
      helm2.transitTo(tr, plane),
      { a: 2, b: 0, x: 10, y: 15 },
      'preserve scaling effect'
    )

    tr = { a: 1, b: 0, x: 10, y: 20 }
    plane = { a: 0, b: 2, x: 0, y: 0 }
    t.deepEqual(
      helm2.transitTo(tr, plane),
      { a: 1, b: 0, x: 10, y: -5 },
      'preserve rotating effect'
    )

    t.end()
  })
}
