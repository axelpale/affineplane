const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: basic homothety', (t) => {
    let sphere, point

    sphere = { x: 0, y: 0, z: 0, r: 0 }
    point = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      sphere3.homothety(sphere, point, 1),
      { x: 0, y: 0, z: 0, r: 0 },
      'origin at sphere center'
    )

    sphere = { x: 200, y: 200, z: 200, r: 100 }
    point = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      sphere3.homothety(sphere, point, 0),
      { x: 0, y: 0, z: 0, r: 0 },
      'zero factor towards zero'
    )

    sphere = { x: 200, y: 200, z: 200, r: 100 }
    point = { x: 1, y: 1, z: 1 }
    t.deepEqual(
      sphere3.homothety(sphere, point, 0),
      { x: 1, y: 1, z: 1, r: 0 },
      'zero factor towards non-zero'
    )

    sphere = { x: 2, y: -2, z: 2, r: 2 }
    point = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      sphere3.homothety(sphere, point, 0.5),
      { x: 1, y: -1, z: 1, r: 1 },
      'half'
    )

    sphere = { x: 2, y: 2, z: 2, r: 2 }
    point = { x: 2, y: 0, z: 0 }
    t.deepEqual(
      sphere3.homothety(sphere, point, 0.5),
      { x: 2, y: 1, z: 1, r: 1 },
      'half along y axis'
    )

    t.end()
  })
}
