const scaleBy = require('../plane3/scaleBy')

module.exports = (plane, depth, camera) => {
  // @affineplane.plane3.projectToDepth(plane, depth, camera)
  //
  // Project the plane to the given depth so that it still looks the same
  // to the camera. The plane is scaled and translated to match the appearance.
  //
  // Parameters:
  //   plane
  //     a plane3 in the reference space.
  //   depth
  //     a number, the z coordinate in the reference space.
  //     .. The resulting plane will have this for its z coordinate.
  //   camera
  //     a point3 in the reference space.
  //
  // Return:
  //   a plane3 in the reference space.
  //

  // Distances to camera.
  const distToPlane = camera.z - plane.z
  const distToDepth = camera.z - depth
  // If camera is at the plane depth,
  // the ratio would become infinite.
  if (distToPlane === 0) {
    // Becomes singular. Origin at camera position.
    // TODO throw error instead singular?
    plane = { a: 0, b: 0, x: camera.x, y: camera.y, z: depth }
  } else {
    // Find scaling ratio.
    const ratio = distToDepth / distToPlane
    // When we use the camera as the scaling pivot, we get
    // the correct translation at the same time.
    plane = scaleBy(plane, camera, ratio)
  }

  return plane
}
