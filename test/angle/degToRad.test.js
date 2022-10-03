const angle = require('../../index').angle
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic radToDeg', (t) => {
    t.equal(angle.degToRad(90), PI / 2, 'right angle')
    t.equal(angle.degToRad(-180), -PI, 'allow negative')
    t.equal(angle.degToRad(720), PI * 4, 'allow value over limit')
    t.equal(angle.degToRad(-540), -3 * PI, 'allow value below limit')

    t.end()
  })
}
