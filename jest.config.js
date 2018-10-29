module.exports = {
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    // module must come first
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test-utils/style-mock.js'),
  },
};
