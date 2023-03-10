const segment2 = require('../../index').segment2

module.exports = (ts) => {
  ts.test('case: valid segment2', (t) => {
    t.ok(segment2.validate([{ x: 1, y: 2 }, { x: 2, y: 3 }]), 'two points')

    t.end()
  })

  ts.test('case: invalid segment2', (t) => {
    t.notOk(segment2.validate([]), 'detect empty')
    t.notOk(segment2.validate(null), 'detect null')
    t.notOk(segment2.validate({}), 'detect empty object')
    t.notOk(
      segment2.validate([{ x: 0, y: 1 }, { x: 0 }]),
      'detect invalid point'
    )
    t.notOk(
      segment2.validate([{ x: 0, y: 1 }, '0,1']),
      'detect string'
    )

    t.end()
  })
}
