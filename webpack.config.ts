import {Configuration} from 'webpack';
import nodeExternals from 'webpack-node-externals';
import path from 'path';

const config: Configuration = {
  mode: "development",
  entry: './entry.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  target: 'node',
  externals: [nodeExternals()]
}

export default config;
