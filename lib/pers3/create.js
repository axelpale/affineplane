module.exports = (tran, camera) => {
  // Create a perspective projection
  // from a source plane to a target projection plane.
  //
  // Parameters:
  //   tran
  //     a tran3, transition from the source plane
  //     to the projection plane.
  //   camera
  //     a point3, position of the camera with respect
  //     to the source plane.
  //
  // Return:
  //   a pers3
  //
  return {
    tran: tran,
    camera: camera
  }
}
