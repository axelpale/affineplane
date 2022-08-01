const vec3 = require('../../lib/vec3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic polar coords', (t) => {
    const pol = vec3.toPolar({ x: 0, y: 0, z: 1 })
    t.almostEqual(pol.magnitude, 1, 'magnitude')
    t.almostEqual(pol.roll, PI / 2, 'roll')
    t.almostEqual(pol.pitch, PI / 2, 'pitch')

    const pol2 = vec3.toPolar({ x: 0, y: 2, z: 0 })
    t.almostEqual(pol2.magnitude, 2, 'magnitude')
    t.almostEqual(pol2.roll, PI / 2, 'roll')
    t.almostEqual(pol2.pitch, 0, 'pitch')

    const pol3 = vec3.toPolar({ x: 0, y: 0, z: 0 })
    t.almostEqual(pol3.magnitude, 0, 'magnitude')
    t.almostEqual(pol3.roll, 0, 'roll')
    t.almostEqual(pol3.pitch, 0, 'pitch')

    t.end()
  })
}
