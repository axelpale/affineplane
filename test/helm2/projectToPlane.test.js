const helm2 = require('../../lib/helm2')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    let tr, target

    tr = { a: 2, b: 0, x: 3, y: 0 }
    target = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      helm2.projectToPlane(tr, target),
      { a: 2, b: 0, x: 3, y: 0 },
      'trivial plane'
    )

    tr = { a: 2, b: 0, x: 3, y: 0 }
    target = { a: 2, b: 0, x: 1, y: 2, z: 0 }
    t.deepEqual(
      helm2.projectToPlane(tr, target),
      { a: 2, b: 0, x: 1.5, y: 0 },
      'helm does not lose scaling effect but translation changes'
    )

    t.end()
  })
}
