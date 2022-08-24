const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic helm3 transit to plane', (t) => {
    let tr, target

    tr = { a: 2, b: 0, x: 20, y: 30, z: 40 }
    target = { a: 2, b: 0, x: 20, y: 30, z: 40 }
    t.deepEqual(
      helm3.transitTo(tr, target),
      { a: 2, b: 0, x: 10, y: 15, z: 40 },
      'preserve depth displacement'
    )

    t.end()
  })
}
