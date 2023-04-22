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

  ts.test('case: circle-segment collision', (t) => {
    let c, seg

    c = { x: 0, y: 0, z: 0, r: 0 }
    seg = [{ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }]
    t.true(
      circle3.collideSegment(c, seg),
      'zero should collide if at the same point'
    )

    c = { x: 0, y: 0, z: 0, r: 0 }
    seg = [{ x: 0, y: 0, z: -1 }, { x: 0, y: 0, z: 1 }]
    t.true(
      circle3.collideSegment(c, seg),
      'should collide if segment goes through pole'
    )

    c = { x: 1, y: 0, z: 0, r: 0 }
    seg = [{ x: 0, y: 0, z: -1 }, { x: 0, y: 0, z: 1 }]
    t.false(
      circle3.collideSegment(c, seg),
      'should not collide if segment off'
    )

    c = { x: 0, y: 0, z: 0, r: 1 }
    seg = [{ x: 0, y: 0, z: -1 }, { x: 0, y: 0, z: -2 }]
    t.false(
      circle3.collideSegment(c, seg),
      'should not collide if segment outside'
    )

    c = { x: 0, y: 0, z: 0, r: 1 }
    seg = [{ x: 1, y: 0, z: -1 }, { x: 1, y: 0, z: 1 }]
    t.true(
      circle3.collideSegment(c, seg),
      'should collide if segment intersects circle edge'
    )

    t.end()
  })
}
