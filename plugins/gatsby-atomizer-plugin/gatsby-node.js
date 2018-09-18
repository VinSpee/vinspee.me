module.exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'webpack-atomizer-loader',
              options: {
                configPath: `${__dirname}/../../src/atomicCSSConfig.js`,
              },
            },
          ],
        },
      ],
    },
  });
};
