const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic helm3 transit to plane', (t) => {
    const tr = { a: 2, b: 0, x: 20, y: 30, z: 40 }
    const target = { a: 2, b: 0, x: 20, y: 30, z: 40 }
    t.deepEqual(
      helm3.transitTo(tr, target),
      { a: 2, b: 0, x: 10, y: 15, z: 40 },
      'preserve depth displacement'
    )

    t.end()
  })

  ts.test('case: helm3 transit symmetry', (t) => {
    const tr = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    const plane = { a: 3, b: 4, x: 5, y: 6, z: 7 }
    t.almostEqual(
      helm3.transitFrom(helm3.transitTo(tr, plane), plane),
      tr,
      'transitions should be symmetric'
    )

    t.end()
  })
}
