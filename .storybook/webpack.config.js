const path = require('path');
const wixStorybookConfig = require("./webpack.config.storybook")

module.exports = async ({ config, mode }) => {
  const newConfig = wixStorybookConfig(config)
  newConfig.resolve = {
    alias: {
     "nsc-components": path.resolve(__dirname, "..","src")
   }
  }
  console.log(path.resolve(__dirname, "..","src"))
  newConfig.module.rules[0] = {
    test: /\.js[x]?$/,
    include: [path.resolve(__dirname, '..','stories'),path.resolve(__dirname, "..","src")],
    loader: "babel-loader",
  }
  newConfig.module.rules.push({
    test: /\.story\.js$/,
    include: [path.resolve(__dirname, '..','stories'),path.resolve(__dirname, "..","src")],
    loader: "wix-storybook-utils/loader",
    options: {
      storyConfig: {
        moduleName: "nsc-components",
        repoBaseURL:
          "https://github.com/aaxuyun/nsc-components-v1/tree/master/src/",
      }
    }

  })

   
  
  // Return the altered config
  return newConfig
}
// const path = require('path');
// const webpack = require('webpack');

// // 路径别名
// const alias = {};

// module.exports = {
//   mode: 'production',
//   module: {
//     rules: [
      
//     ]
//   },

//   plugins: [
//     new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en-gb/),
//   ],

//   // 解析模块
//   resolve: {
//     alias,
//     // 自动解析确定的扩展
//     extensions: ['.mjs', '.js', '.jsx'],
//   },
// }