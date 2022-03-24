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
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      // https://stackoverflow.com/questions/64818489/webpack-omit-creation-of-license-txt-files
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  output: {
    filename: 'vonage-video-effects.js',
    path: path.resolve(__dirname, 'dist/umd'),
    library: {
      name: 'VideoEffects',
      type: 'umd'
    }
  }
};
