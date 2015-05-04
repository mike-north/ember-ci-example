/*globals blanket, module */

var options = {
  modulePrefix: "testme",
  filter: "//.*testme/.*/",
  antifilter: "//.*(tests|template).*/",
  loaderExclusions: [],
  enableCoverage: true,
  lcovOptions: {
    outputFile: 'lcov.dat'
  },
  cliOptions: {
    reporters: ['lcov']
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
