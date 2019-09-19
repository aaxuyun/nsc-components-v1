const path = require('path');
const wixStorybookConfig = require("./webpack.config.storybook")

module.exports = async ({ config, mode }) => {
  config.module.rules.push ({
    test: /\.js[x]?$/,
    include: [path.resolve(__dirname, '../stories')],
    loader: "babel-loader",
  })
  //const newConfig = wixStorybookConfig(config)
  config.resolve= {
      alias: {
        "nsc-components": path.resolve(__dirname, "..", "dist")
      }
    }
    config.module.rules.push ({
      test: /\.(css|scss|sass)$/,
      exclude:[path.resolve('../node_modules/antds')],
      rules: [
        {
          loader: 'style-loader',
          options: {
            // Reuses a single `<style></style>` element
            singleton: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            includePaths: ['node_modules'],
            sourceMap: false,
          },
        },
        {
          test: /\.(scss|sass)$/,
          loader: 'sass-loader',
          options: {
            sourceMap: false,
            implementation: require('node-sass'),
            includePaths: ['node_modules'],
          },
        },
      ]
    })
  
  // Return the altered config
  return config
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