const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'raw-loader', 'sass-loader'],
        include: [
          path.resolve(__dirname, '../styles/'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
