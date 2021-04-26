var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const discardComments = require('postcss-discard-comments');
const resType = require('postcss-responsive-type');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const reporter = require('postcss-reporter');

module.exports = [
  {
    name: 'build',
    context: __dirname,
    entry: path.resolve(__dirname, './src/DatePresetPicker.js'),
    output: {
      path: path.join(__dirname, 'lib'),
      filename: 'index.js',
      publicPath: '/lib/',
      library: 'react-dates-presets',
      libraryTarget: 'commonjs2',
    },
    module: {
      loaders: [
        { test: /\.js?$/, loader: 'babel', include: path.join(__dirname, 'src') },
        { test: /\.css$/, exclude: [/node_modules/], loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!postcss') },
        { test: /\.css$/, include: [/node_modules/], loader: ExtractTextPlugin.extract('style', 'css') },
      ],
    },
    externals: {
      react: 'react',
      'react-dates': 'react-dates',
      'react-dom': 'react-dom',
    },
    target: 'web',
    postcss: [
      // responsive type
      resType(),

      // Discard comments in your CSS files with PostCSS.
      // https://github.com/ben-eb/postcss-discard-comments
      // Remove all comments... we don't need them further down the line
      // which improves performance (reduces number of AST nodes)
      discardComments({
        removeAll: true,
      }),

      // Tries to fix all of flexbug's issues
      // https://github.com/luisrudge/postcss-flexbugs-fixes
      flexbugsFixes,

      // Unwrap nested rules like how Sass does it.
      // https://github.com/postcss/postcss-nested
      nested,

      autoprefixer({ browsers: ['last 2 versions'] }),

      // Log PostCSS messages to the console
      reporter({
        clearMessages: true,
      }),
    ],
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new ExtractTextPlugin('styles.css'),
    ],
  },
  {
    name: 'demo',
    entry: {
      app: path.resolve(__dirname, 'demo/App.jsx'),
      vendor: ['react', 'react-dates', 'react-dom'],
    },
    output: {
      path: path.join(__dirname, 'demo'),
      filename: 'app.js',
    },
    module: {
      loaders: [
        { test: /\.jsx$/, loader: 'babel', include: path.join(__dirname, 'demo') },
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    target: 'web',
    postcss: [
      // responsive type
      resType(),

      // Discard comments in your CSS files with PostCSS.
      // https://github.com/ben-eb/postcss-discard-comments
      // Remove all comments... we don't need them further down the line
      // which improves performance (reduces number of AST nodes)
      discardComments({
        removeAll: true,
      }),

      // Tries to fix all of flexbug's issues
      // https://github.com/luisrudge/postcss-flexbugs-fixes
      flexbugsFixes,

      // Unwrap nested rules like how Sass does it.
      // https://github.com/postcss/postcss-nested
      nested,

      autoprefixer({ browsers: ['last 2 versions'] }),

      // Log PostCSS messages to the console
      reporter({
        clearMessages: true,
      }),
    ],
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
      new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    ],
  },
];
