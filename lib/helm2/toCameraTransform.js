module.exports = (helm, plane, camera) => {
  // @affineplane.helm2.toCameraTransform(helm, plane, camera)
  //
  // Convert the dilation in the transform to a translation of the camera,
  // so that the plane would dilate the same amount due to the perspective.
  // This can be used to convert pinch gestures to forward movement.
  //
  // Parameters:
  //   helm
  //     a helm2 on the plane.
  //   plane
  //     a plane3, in the reference basis.
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
