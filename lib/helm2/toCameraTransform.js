module.exports = (helm, origin, plane, camera) => {
  // @affineplane.helm2.toCameraTransform(helm, plane, camera)
  //
  // Convert the dilation in the transform to a translation of the camera,
  // so that the plane would dilate the same amount due to the perspective.
  // This can be used to convert pinch gestures to forward movement.
  //
  // Parameters:
  //   helm
  //     a helm2 in the reference basis. Applied at origin.
  //   origin
  //     a point3 in the reference basis. Position of the transform.
  //   plane
  //     a plane3, in the reference basis. The image plane.
  //   camera
  //     a point3, in the reference basis.
  //
  // Return:
  //   a helm3, with scale at 1
  //

  // How we could transform the camera so that its movement would
  // cause the plane transform in the same way and amount as the helmert
  // would transform it?

  throw new Error('not implemented')
}
