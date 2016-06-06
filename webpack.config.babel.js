import webpack from 'webpack';
import { name } from './package.json';
import pascalCase from 'pascal-case';

const config = {
  entry: './src',
  output: {
    path: `${__dirname}/release/`,
    filename: `${name}.min.js`,
    library: pascalCase(name),
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  devServer: {
    contentBase: 'release',
    noInfo: true,
    quiet: true,
  },
};

switch (process.env.NODE_ENV) {
  case 'production':
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ];

    config.devtool = '#source-map';
    break;

  default:
    config.devtool = 'inline-source-map';
}

export default config;
