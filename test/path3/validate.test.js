const path3 = require('../../index').path3

module.exports = (ts) => {
  ts.test('case: valid path3', (t) => {
    t.ok(
      path3.validate([]),
      'allow empty'
    )
    t.ok(
      path3.validate([{ x: 1, y: 2, z: 3 }, { x: 2, y: 3, z: 4 }]),
      'two points'
    )

    t.end()
  })

  ts.test('case: invalid path3', (t) => {
    t.notOk(path3.validate(null), 'detect null')
    t.notOk(path3.validate({}), 'detect empty object')
    t.notOk(path3.validate([{ x: 0 }]), 'detect invalid point')
    t.notOk(path3.validate([{ x: 0, y: 1, z: 2 }, '0,1']), 'detect string')

    t.end()
  })
}
