module.exports = function (abxy) {
  // affineplane.tran2.fromArray(abxy)
  // Create an affine similarity transform from 4-element array.
  //
  // Parameter
  //   abxy
  //     an array with four number elements [a, b, x, y]
  //
  // Return
  //   a tran2, a similarity transform.
  //
  return {
    a: abxy[0],
    b: abxy[1],
    x: abxy[2],
    y: abxy[3]
  }
}
