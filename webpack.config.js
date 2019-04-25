const path = require('path');

module.exports = {
  entry: './server/index.js',
  mode: "production",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
