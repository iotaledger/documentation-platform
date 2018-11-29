const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'raw-loader', 'sass-loader'],
        include: [
          path.resolve(__dirname, '../styles/'),
          path.resolve(__dirname, '../node_modules/css-styleguide'),
        ],
      },
      {
        test: /\.(png|svg|jpe?g|woff2?|ttf|eot)$/,
        use: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
