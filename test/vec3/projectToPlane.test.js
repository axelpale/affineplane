const vec3 = require('../../lib/vec3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      vec3.projectToPlane({ x: 3, y: 0, z: 0 }, plane),
      { x: 3, y: 0 },
      'identity plane; should lose z'
    )

    const planeb = { a: 2, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      vec3.projectToPlane({ x: 4, y: 0, z: 4 }, planeb),
      { x: 2, y: 0 },
      'plane translation should not affect'
    )

    t.end()
  })

  ts.test('case: perspective projection to plane', (t) => {
    let vec, plane, position, camera

    vec = { x: 0, y: 0, z: 0 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    position = { x: 0, y: 0, z: 0 }
    camera = { x: 0, y: 0, z: -1 }
    t.deepEqual(
      vec3.projectToPlane(vec, plane, position, camera),
      { x: 0, y: 0 },
      'vector already on the plane'
    )

    vec = { x: 2, y: 0, z: 0 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    position = { x: 0, y: 0, z: 1 }
    camera = { x: 0, y: 0, z: -1 }
    t.deepEqual(
      vec3.projectToPlane(vec, plane, position, camera),
      { x: 1, y: 0 },
      'should half the vector length'
    )

    vec = { x: 0, y: 0, z: 1 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    position = { x: 0, y: 0, z: 0 }
    camera = { x: 0, y: 0, z: -1 }
    t.deepEqual(
      vec3.projectToPlane(vec, plane, position, camera),
      { x: 0, y: 0 },
      'should handle normal vector'
    )

    // see note 2023-02-19-15 for a sketch
    vec = { x: 0, y: 1, z: 2 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 2 }
    position = { x: 0, y: 2, z: 4 }
    camera = { x: 0, y: 0, z: 0 }
    t.almostEqualVector(
      vec3.projectToPlane(vec, plane, position, camera),
      { x: 0, y: 0 },
      'should handle tilted vector normal to camera'
    )

    // see note 2023-02-19-15 for a sketch
    vec = { x: 0, y: -3, z: 1 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 1 }
    position = { x: 0, y: 1, z: 4 }
    camera = { x: 0, y: -1, z: -2 }
    t.almostEqualVector(
      vec3.projectToPlane(vec, plane, position, camera),
      { x: 0, y: -1.42857142857 },
      'should handle complex case'
    )

    t.end()
  })
}
