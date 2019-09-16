const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({ // js 模块打包
    test: /\.(mjs|js|jsx)$/,
    exclude: [ path.resolve(__dirname, 'node_modules') ],
    use: ['babel-loader']
  }, { // 样式文件打包
    test: /\.(css|scss)$/,
    include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, '.storybook')],
    use: [
      'style-loader', {
        loader: 'css-loader',
        options: {
          sourceMap: false,
        }
      }, {
        loader: 'postcss-loader',
        options: { javascriptEnabled: true, sourceMap: false },
      }, {
        loader: 'sass-loader'
      }
    ],
  }, {
    test: /\.less$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      'less-loader',
      { loader: 'less-loader', options: { javascriptEnabled: true } }
    ]
  }, { // 文字图片打包
    test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
    use: [{
      loader: 'url-loader',
      options: {
        limit: 10 * 1000,
      }
    }]
  }, { // 文本文件加载(后期可能需要引入 markdown 文件)
    test: /\.(txt|md)$/,
    use: 'raw-loader',
  });

  // Return the altered config
  return config;
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