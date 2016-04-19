const path = require('path');

const init = {
  plugins: [
    'karma-chrome-launcher',
    // 'karma-phantomjs-launcher', // optional install
    'karma-mocha',

    'karma-webpack',
    'karma-sourcemap-loader',

    'karma-mocha-reporter',
    'karma-coverage',
  ],

  browsers: ['Chrome'],
  frameworks: ['mocha'],
  client: {
    mocha: {
      timeout: 5000,
    },
  },
  files: [
    'test/index.js',

    // serve static files to '/base/'
    // { pattern: './test/fixtures/**', included: false },
  ],

  preprocessors: {
    'test/**/*.js': ['webpack', 'sourcemap'],
  },
  webpack: {
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        },
        // fix `Uncaught Error: Cannot find module "./package.json"`
        {
          test: /\.json$/,
          loader: 'json',
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.json'],
    },
    devtool: 'inline-source-map',
  },
  webpackMiddleware: {
    quiet: true,
    noInfo: true,
  },

  reporters: ['mocha'],
};

module.exports = (config) => {
  config.set(init);

  // if (process.env.TRAVIS) {
  //   config.set({
  //     browsers: ['PhantomJS'],
  //   });
  // }

  if (config.singleRun) {
    config.reporters.push('coverage');
    config.set({
      coverageReporter: {
        reporters: [
          {
            type: 'lcov',
            dir: 'coverage',
            subdir: '.',
          },
          {
            type: 'text',
          },
        ],
      },
    });
    config.webpack.module.loaders.push({
      test: /\.js$/,
      loader: 'isparta',
      include: path.resolve('src'),
    });
  }
};
