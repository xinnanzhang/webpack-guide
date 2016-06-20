//文件用于部署上线
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// var {UglifyJsPlugin , CommonsChunkPlugin} = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var PUBLIC_PATH = path.resolve(ROOT_PATH, 'public');
module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    public: path.resolve(PUBLIC_PATH, 'abc.js'),
    //添加要打包在vendors里面的库
    vendors: ['jquery', 'moment']
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      //样式处理 省略了-loaders
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: APP_PATH
      },
      //图片处理   注意后面那个limit的参数，当你图片大小小于这个限制的时候，(小图片)会自动启用base64编码图片  将一些图片自动转成base64编码的，为你减轻很多的网络请求
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      },
      //添加对es6的支持
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    //这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ]
};
