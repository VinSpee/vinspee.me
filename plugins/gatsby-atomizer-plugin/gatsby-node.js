const path = require(`path`)

module.exports.modifyWebpackConfig = ({ config }) => {
  return config.loader(`atomizer`, {
    test: /jsx?$/, 
    exclude: /node_modules/,
    loader: `webpack-atomizer-loader`,
    query: {
      configPath: [
        path.resolve(__dirname, '../../src/atomicCSSConfig.js'),
      ],
    },
  });
};
