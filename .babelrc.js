const isProd = String(process.env.NODE_ENV) === 'production';
const isTest = String(process.env.NODE_ENV) === 'test'; // thanks jest :)

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-modules-commonjs',
    isTest ? 'babel-plugin-dynamic-import-node' : null,
  ].filter(Boolean),
};
