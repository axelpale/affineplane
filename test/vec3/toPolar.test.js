const vec3 = require('../../lib/vec3')
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic polar coords', (t) => {
    const pol = vec3.toPolar({ x: 0, y: 0, z: 1 })
    t.almostEqual(pol.magnitude, 0, 'magnitude') // TODO remove in v3
    t.almostEqual(pol.direction, 0, 'direction')
    t.almostEqual(pol.depth, 1, 'depth')

    const pol2 = vec3.toPolar({ x: 0, y: 2, z: 0 })
    t.almostEqual(pol2.magnitude, 2, 'magnitude') // TODO remove in v3
    t.almostEqual(pol2.direction, PI / 2, 'direction')
    t.almostEqual(pol2.depth, 0, 'depth')

    const pol3 = vec3.toPolar({ x: 0, y: 0, z: 0 })
    t.almostEqual(pol3.radius, 0, 'radius')
    t.almostEqual(pol3.magnitude, 0, 'magnitude') // TODO remove in v3
    t.almostEqual(pol3.direction, 0, 'direction')
    t.almostEqual(pol3.depth, 0, 'depth')

    t.end()
  })
}
