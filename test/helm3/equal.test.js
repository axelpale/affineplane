const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic equal', (t) => {
    t.true(helm3.equal(
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      { a: 1, b: 0, x: 0, y: 0, z: 0 }
    ), 'equal in value')

    const tr = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.true(helm3.equal(tr, tr), 'equal in reference')

    t.false(helm3.equal(
      { a: 1, b: 0, x: 0, y: 0, z: 2 },
      { a: 1, b: 0, x: 0, y: 0, z: 0 }
    ), 'inequal in z')

    t.true(helm3.equal({}, {}), 'allow empty objects be equal')

    t.false(helm3.equal(null, null), 'nulls are not equal')

    t.false(helm3.equal(
      { a: 0, b: 1, x: 2, y: 3, z: 4 },
      { b: 1, x: 2, y: 3, z: 4 }
    ), 'detect missing prop vs zero')

    t.end()
  })
}
