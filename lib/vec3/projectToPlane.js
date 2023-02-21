const transitTo = require('../vec2/transitTo')
const pointDiff = require('../point3/difference')
const vectorAdd = require('./add')
const vectorDiff = require('./difference')
const vectorScale = require('./scaleBy')
// const projectPoint = require('../point3/projectToPlane')
// const translatePoint = require('../point3/translate')
// const pointDiff = require('../point2/difference')

module.exports = (vec, plane, position, camera) => {
  // @affineplane.vec3.projectToPlane(vec, plane[, position, camera])
  // @affineplane.vec3.projectTo
  //
  // Project a 3D vector onto a 2D plane orthogonally.
  // If a vector position and a camera positions are given,
  // project the vector perspectively. Think of the vector as a displacement
  // that acts at the given position. The resulting 2D vector is
  // the component of that displacement parallel with the plane which
  // would produce visually same movement.
  //
  // Parameters:
  //   vec
  //     a vec3, in the reference basis.
  //   plane
  //     a plane3, in the reference basis.
  //     .. The image plane to which to project.
  //   position
  //     optional point3, the vector position in the reference basis.
  //     .. The vector itself has only direction and magnitude, no position,
  //     .. and the perspective projection requires a position.
  //     .. If left undefined, will project orthogonally.
  //   camera
  //     optional point3, the camera position in the reference basis.
  //     .. If left undefined, will project orthogonally.
  //
  // Return:
  //   a vec2 on the image plane.
  //

  if (position && camera) {
    // Project perspectively

    // Find perspective component of the vector on xy plane.
    // See note 2023-02-21-14 for math.

    // A vector cp from camera to the point
    const cp = pointDiff(camera, position)
    // A vector cv from camera to the point+vec
    const cv = vectorAdd(cp, vec)
    // A scaling ratio
    const vz = vec.z
    const cz = cv.z
    // Handle situation where camera is on the vector:
    // the vector looks either infinite or zero vector.
    if (cp.z === 0 || cz === 0) {
      return { x: 0, y: 0 }
    }
    const rz = vz / cz
    // Find flat component of the vector.
    const vhat = vectorDiff(vectorScale(vec, 1 - rz), vectorScale(cp, rz))
    // Now we need to project this flat vector onto the plane.
    const rp = (camera.z - plane.z) / (camera.z - position.z)
    const vhat2 = vectorScale(vhat, rp)
    // Represent the vector on the target plane.
    // This also does an orthogonal projection.
    // The z dimension is lost.
    return transitTo(vhat2, plane)

    // // Alternative way to solve this is just perspective point3
    // // projection from the beginning and end of the vector.
    // // Maybe this is simpler with less fn calls?
    // const positionOnPlane = projectPoint(position, plane, camera)
    // const tip = translatePoint(position, vec)
    // const tipOnPlane = projectPoint(tip, plane, camera)
    // const vhat = pointDiff(positionOnPlane, tipOnPlane)
    // return vhat
  }

  // Orthogonal projection.
  // Just lose the z dimension and transit to plane.
  return transitTo(vec, plane)
}
