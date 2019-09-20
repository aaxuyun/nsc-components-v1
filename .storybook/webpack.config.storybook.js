// Export a function. Accept the base config as the only param.
const union = require('lodash/union')
const path = require('path');

const {
  createCommonWebpackConfig,
  getStyleLoaders,
} = require("yoshi/config/webpack.config")

const styleLoaders = getStyleLoaders({
  embedCss: true,
  isDebug: false,
  separateCss: false,
  isHmr: false,
  tpaStyle: false,
})
styleLoaders[0].exclude=path.resolve(__dirname,'..','node_modules/antd')
const rules=[
  {
    test: /\.css$/,
    include: path.resolve(__dirname, "..","node_modules/antd"),
    use: [
      'yoshi-style-dependencies/style-loader','yoshi-style-dependencies/css-loader']
  },
  {
    test: /\.less$/,
    use: [
      'yoshi-style-dependencies/style-loader',
      { loader: 'yoshi-style-dependencies/css-loader',options: {
        modules: true,
        sourceMap: false
      } },
      { loader: 'yoshi-style-dependencies/less-loader', options: { javascriptEnabled: true } }
    ]
  },
  
]
module.exports = config => {
  const webpackCommonConfig = createCommonWebpackConfig({ isDebug: true });
  config.resolve.extensions = union(
    config.resolve.extensions,
    webpackCommonConfig.resolve.extensions,
  )
  config.module.rules = [
    ...webpackCommonConfig.module.rules,
    ...rules,
    ...styleLoaders
  ]
  config.plugins = [...(config.plugins || [])]
  config.node = { ...webpackCommonConfig.node, ...config.node }
  return config
}