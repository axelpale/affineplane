const angle = require('../../index').angle
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: limits', (t) => {
    t.equal(angle.modulo(1), 1, 'value between limits')
    t.equal(angle.modulo(-PI), PI, 'exclude -pi')
    t.equal(angle.modulo(PI * 3), PI, 'value over limit')
    t.equal(angle.modulo(-3 * PI), PI, 'value below limit')

    t.end()
  })
}
