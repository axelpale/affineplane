module.exports = function (abxy) {
  // Create an affine similarity transform from 4-element array.
  //
  // Parameter
  //   abxy
  //     array with four number elements
  //
  // Return
  //   tran2, a similarity transform.
  //
  return {
    a: abxy[0],
    b: abxy[1],
    x: abxy[2],
    y: abxy[3]
  }
}
