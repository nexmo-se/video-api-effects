const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const clientVersion = require('./lib/version.ts');

module.exports = {
  entry: './lib/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              compilerOptions: {
                outDir: './dist'
              }
            }
          }
        ]
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.ts', '.js']
  },
  plugins: [
    // new webpack.BannerPlugin({ banner: license, raw: true, entryOnly: true }),
    new webpack.EnvironmentPlugin({
      ENABLE_LOGGING: true,
      CLIENT_VERSION: clientVersion
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // This plugin option stops webpack moving the comments into a separate license file and leaves it prepended to the output:
      // https://stackoverflow.com/questions/64818489/webpack-omit-creation-of-license-txt-files
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  output: {
    filename: 'video-effects.umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'VideoEspress',
      type: 'umd'
    }
  }
};
