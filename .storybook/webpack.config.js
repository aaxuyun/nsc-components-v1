const merge = require('lodash/merge');
const path = require('path');
const StorybookConfig = require("yoshi/config/webpack.config.storybook")

module.exports = async ({ config, mode }) => {
  config.module.rules[0].use[0].loader = require.resolve("babel-loader")
  const newConfig = StorybookConfig(config)
  newConfig.module.rules.push({
    test: /\.story\.js$/,
    include: path.resolve(__dirname, 'stories'),
    loader: "wix-storybook-utils/loader",
    options: {
      storyConfig: {
        moduleName: "nsc-components",
        repoBaseURL:
          "https://github.com/aaxuyun/nsc-components-v1/tree/master/src",
        issueURL: "https://github.com/aaxuyun/nsc-components-v1/issues/new"
      }
    }
  })
  return newConfig
}