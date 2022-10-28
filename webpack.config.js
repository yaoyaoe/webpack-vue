const path=require('path')
const {VueLoaderPlugin} =require('vue-loader')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
// 设置element-plus 按需加载 start
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// 设置element-plus 按需加载 end
module.exports={
  // 入口
  entry:'./src/main.js',
  // 输出
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].[contenthash:8].js',
    publicPath:'/'//解决history 刷新问题
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        exclude:/node_modules/,
        loader:'vue-loader'
      },
      {
        test:/\m?.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }

      },
      {
        test:/\.css/,
        use:['style-loader','css-loader']

      },
      {
        test:/\.less/,
        exclude:/node_modules/,
        use:['style-loader','css-loader','less-loader']

      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        // 设置图片打包地址 以及 访问相对于html 地址
        generator:{
          publicPath:'assets/',
          outputPath: 'assets/'
        }
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'webpack 手工配置 vue 3.0',
      filename:'index.html',
      template:'./publice/index.html'
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  devServer:{
    historyApiFallback:true
  },
  //配置模块如何解析
  resolve:{
    alias:{
      '@$':path.join(__dirname,'src')
    }
  },
  // 优化
  optimization:{
    // 值 "single" 会创建一个在所有生成 chunk 之间共享的运行时文件
    // runtimeChunk:'single',
    // tree shaking
    // usedExports:true,
    sideEffects: true,
  }
}