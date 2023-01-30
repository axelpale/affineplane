module.exports = function (tr) {
  // @affineplane.helm2.toString(tr)
  //
  // Convert the transformation to a string compatible with the CSS
  // transform-function data type, for example `matrix(1, 2, -2, 1, 3, 4)`.
  // Together with affineplane.helm2.fromString(...), this method enables
  // helm2 serialization to and from strings.
  //
  // Parameters:
  //   tr
  //     a helm2
  //
  // Return:
  //   a string, CSS transform
  //

  // NOTE When JavaScript converts numbers to strings, the string might
  // end up using the scientific notation (e.g. 1e-12). Not all browsers
  // support scientific notation in CSS. We have experienced problems
  // with Safari and Opera. Therefore toString must prevent the scientific
  // notation here and convert to fixed number of decimal places.
  //
  // See also: https://stackoverflow.com/q/1685680/638546
  //
  const a = tr.a.toFixed(8)
  const b = tr.b.toFixed(8)
  const c = (-tr.b).toFixed(8) // Unnecessary? Maybe '-' + b? No, e.g. '--1.2'
  const x = tr.x.toFixed(8)
  const y = tr.y.toFixed(8)
  return 'matrix(' + a + ',' + b + ',' + c + ',' + a + ',' + x + ',' + y + ')'
}
