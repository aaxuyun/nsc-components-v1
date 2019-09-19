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
styleLoaders[0].test= /\.(scss|sass)$/
delete styleLoaders[0].exclude 
styleLoaders[0].exclude=[path.resolve(__dirname,'../node_modules/antd')]
const rules=[
  {
    test: /\.less$/,
    include:[path.resolve(__dirname,'../node_modules/antd')],
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      'less-loader',
      { loader: 'less-loader', options: { javascriptEnabled: true } }
    ]
  }]
module.exports = config => {
  const webpackCommonConfig = createCommonWebpackConfig({ isDebug: true });
  config.resolve.extensions = union(
    config.resolve.extensions,
    webpackCommonConfig.resolve.extensions,
  )
  //webpackCommonConfig.module.rules[1].include=[path.resolve(__dirname,'../stories'),path.resolve(__dirname,'../node_modules/wix-storybook-utils')]
  config.module.rules = [
    ...webpackCommonConfig.module.rules,
    ...styleLoaders,
    ...rules,
  ]
  console.log([...config.module.rules])
  config.plugins = [...(config.plugins || [])]
  config.node = { ...webpackCommonConfig.node, ...config.node }
  return config
}