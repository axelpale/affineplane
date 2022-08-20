module.exports = {
  entry: './app.js',
  output: {
    filename: 'app.bundle.js',
    path: __dirname,
    sourceMapFilename: '[file].map'
  },

  devtool: 'source-map',

  mode: 'production'
}
