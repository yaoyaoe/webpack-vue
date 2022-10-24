const path=require('path')
const {VueLoaderPlugin} =require('vue-loader')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
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
        test:/\.less/,
        exclude:/node_modules/,
        use:['style-loader','css-loader','less-loader']

      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'webpack 手工配置 vue 3.0',
      filename:'.index.html',
      template:'./publice/index.html'
    })
  ]
}