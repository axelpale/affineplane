const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    let tr, target

    tr = { a: 2, b: 0, x: 3, y: 0, z: 2 }
    target = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      helm3.projectTo(tr, target),
      { a: 2, b: 0, x: 3, y: 0 },
      'trivial plane, lose z'
    )

    tr = { a: 2, b: 0, x: 3, y: 0, z: 2 }
    target = { a: 2, b: 0, x: 1, y: 2, z: 0 }
    t.deepEqual(
      helm3.projectTo(tr, target),
      { a: 2, b: 0, x: 1.5, y: 0 },
      'preserve scaling effect'
    )

    t.end()
  })
}
