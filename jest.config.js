const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleNameMapper: {
    // module must come first
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  // before jest's been loaded
  setupFiles: [],
  // after jest's been loaded
  setupTestFrameworkScriptFile: require.resolve('./test/setup.js'),
};
