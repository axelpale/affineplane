const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: basic point collision', (t) => {
    t.true(
      circle3.hasPoint({ x: 0, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 0 }),
      'same origin collide'
    )

    t.false(
      circle3.hasPoint({ x: 1, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 0 }),
      'offset zero circle does not collide'
    )

    t.true(
      circle3.hasPoint({ x: 1, y: 1, z: 1, r: 3 }, { x: 2, y: 2, z: 1 }),
      'point inside'
    )

    t.false(
      circle3.hasPoint({ x: 0, y: 0, z: 0, r: 0 }, { x: 0, y: 0, z: 1 }),
      'point offset along z'
    )

    t.end()
  })

  ts.test('case: basic circle collision', (t) => {
    let cc, c

    cc = { x: 0, y: 0, z: 0, r: 0 }
    c = { x: 0, y: 0, z: 0, r: 1 }
    t.true(
      circle3.collide(cc, c),
      'same origin collide'
    )

    cc = { x: 0, y: 0, z: 0, r: 1 }
    c = { x: 0, y: 0, z: 1, r: 1 }
    t.false(
      circle3.collideCircle(cc, c),
      'z offset do not collide'
    )

    cc = { x: -1, y: 0, z: 0, r: 1 }
    c = { x: 1, y: 0, z: 0, r: 1 }
    t.true(
      circle3.collideCircle(cc, c),
      'edges touch'
    )

    t.end()
  })

  ts.test('case: basic homothety', (t) => {
    let circle, point

    circle = { x: 0, y: 0, z: 0, r: 0 }
    point = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      circle3.homothety(circle, point, 1),
      { x: 0, y: 0, z: 0, r: 0 },
      'origin at circle center'
    )

    circle = { x: 200, y: 200, z: 200, r: 100 }
    point = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      circle3.homothety(circle, point, 0),
      { x: 0, y: 0, z: 0, r: 0 },
      'zero factor towards zero'
    )

    circle = { x: 200, y: 200, z: 200, r: 100 }
    point = { x: 1, y: 1, z: 1 }
    t.deepEqual(
      circle3.homothety(circle, point, 0),
      { x: 1, y: 1, z: 1, r: 0 },
      'zero factor towards non-zero'
    )

    circle = { x: 2, y: -2, z: 2, r: 2 }
    point = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      circle3.scaleBy(circle, point, 0.5),
      { x: 1, y: -1, z: 1, r: 1 },
      'half, alias'
    )

    circle = { x: 2, y: 2, z: 2, r: 2 }
    point = { x: 2, y: 0, z: 0 }
    t.deepEqual(
      circle3.scaleBy(circle, point, 0.5),
      { x: 2, y: 1, z: 1, r: 1 },
      'half along y axis, alias'
    )

    t.end()
  })
}
