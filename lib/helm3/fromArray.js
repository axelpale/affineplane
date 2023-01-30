module.exports = function (arr) {
  // @affineplane.helm3.fromArray(arr)
  //
  // Create an affine similarity transform from 5-element array.
  //
  // Parameter
  //   arr
  //     an array of five numbers [a, b, x, y, z]
  //
  // Return
  //   a helm3
  //
  return {
    a: arr[0],
    b: arr[1],
    x: arr[2],
    y: arr[3],
    z: arr[4]
  }
}
