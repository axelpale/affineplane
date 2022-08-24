const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic helm2 transit from plane', (t) => {
    let tr, source

    tr = { a: 2, b: 0, x: 2, y: 3 }
    source = { a: 1, b: 0, x: 2, y: 3 }
    t.deepEqual(
      helm2.transitFrom(tr, source),
      { a: 2, b: 0, x: 2, y: 3 },
      'plane translation does not affect'
    )

    tr = { a: 2, b: 0, x: 2, y: 4 }
    source = { a: 0, b: 2, x: 20, y: 20 }
    t.deepEqual(
      helm2.transitFrom(tr, source),
      { a: 2, b: 0, x: -8, y: 4 },
      'plane scaling and rotation affect helm2 translation'
    )

    t.end()
  })
}
