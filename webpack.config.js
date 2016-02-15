module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader'
      }
    ]
  }
}