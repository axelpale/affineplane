const angle = require('../../index').angle
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic radToDeg', (t) => {
    t.equal(angle.radToDeg(PI / 2), 90, 'right angle')
    t.equal(angle.radToDeg(-PI), -180, 'allow negative')
    t.equal(angle.radToDeg(PI * 4), 720, 'allow value over limit')
    t.equal(angle.radToDeg(-3 * PI), -540, 'allow value below limit')

    t.end()
  })
}
