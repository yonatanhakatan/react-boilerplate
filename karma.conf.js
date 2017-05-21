const webpackConfig = require('./webpack.config.js');

webpackConfig.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
};

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'assets/react/**/*.spec.js',
    ],

    preprocessors: {
      // add webpack as preprocessor
      'assets/react/**/*.js': ['webpack', 'sourcemap', 'coverage'],
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true, //please don't spam the console when running in karma!
    },

    reporters: ['dots', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: true,
    coverageReporter: {
      // specify a common output directory
      dir: './coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
      ],
    },
  });
};
