const path2 = require('../../index').path2

module.exports = (ts) => {
  ts.test('case: valid path2', (t) => {
    t.ok(path2.validate([]), 'allow empty')
    t.ok(path2.validate([{ x: 1, y: 2 }, { x: 2, y: 3 }]), 'two points')

    t.end()
  })

  ts.test('case: invalid path2', (t) => {
    t.notOk(path2.validate(null), 'detect null')
    t.notOk(path2.validate({}), 'detect empty object')
    t.notOk(path2.validate([{ x: 0 }]), 'detect invalid point')
    t.notOk(path2.validate([{ x: 0, y: 1 }, '0,1']), 'detect string')

    t.end()
  })
}
