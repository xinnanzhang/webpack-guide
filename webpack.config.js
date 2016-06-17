var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //现在的代码是合并以后的代码，不利于排错和定位，只需要在config中添加   这样出错以后就会采用source-map的形式直接显示你出错代码的位置。
  devtool: 'eval-source-map',
  //当代码更新的时候自动刷新浏览器   这里好像默认就是这个配置 不加下面这段也可以
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
    //代理配置 详情见https://zhuanlan.zhihu.com/p/20397902
    // proxy: {
    //   '/api/*': {
    //       target: 'http://localhost:5000',
    //       secure: false
    //   }
    // }
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
    ],
    //检查自己的js是否符合jshint的规范
    perLoaders: [
        {
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }
    ]
  },
  //配置jshint的选项，支持es6的校验
  jshint: {
    "esnext": true
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ]
};
