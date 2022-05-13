const affineplane = require('../../index')
const dir2 = affineplane.dir2

const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.equal(dir2.create(1), 1, 'value between limits')
    t.equal(dir2.create(PI * 3), -PI, 'value over limit')
    t.equal(dir2.create(-3 * PI), -PI, 'value below limit')

    t.end()
  })
}
