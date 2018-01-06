var path = require( 'path' );
var fs = require( 'fs' );
var webpack = require( 'webpack' );

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      path.resolve( __dirname, './src/client.js' )
    ]
  },
  target: 'web',
  node: {
    'fs': 'empty'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.css'],
    modules: [
      path.resolve( __dirname, 'src/modules' ),
      'node_modules'
    ]
  },
  output: {
      path: path.resolve( __dirname, './public' ),
      filename: "[name].js",
      publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: [
            ["es2015", { "modules": false }],
            "stage-1",
            "react"
          ],
          plugins: [
            "extract-hoc/babel",
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]$[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ],
      }
    ]
  },
  plugins: [
    function() {
      this.plugin( 'done', ( stats ) => {
        fs.writeFileSync(
          path.join( __dirname, 'manifest.json' ),
          JSON.stringify( stats.toJson().assetsByChunkName, null, 2 )
        );
      });
    },
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || "development" )
    })
  ],
  devServer: {
    hot: true
  }
};
