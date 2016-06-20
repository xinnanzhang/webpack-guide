npm init
//babel 环境
//webpack 环境
npm install html-webpack-plugin --save-dev

//package.json
"start": "webpack-dev-server --hot --inline",
配置start  当npm start时也启动webpack-dev-server   这里不需要配置也可以 那么就需要输入webpack-dev-server
"build": "webpack --progress --profile --colors --config webpack.productio"
当项目需要上线都时候 运行 npm build 就会找到 webpack.productio.config.js文件这个文件对开发环境进行了删减  比如一些不要的dev-tools,dev-server和jshint校验等

//文件加载
npm install file-loader --save-dev

//添加样式
npm install css-loader style-loader --save-dev

//图片处理
npm install url-loader --save-dev

//添加ES6 支持
npm install babel-core babel-loader babel-preset-es2015 --save-dev

//添加语法检查
npm install jshint-loader --save-dev

//添加第三方库
npm install jquery moment --save-dev
moment 日期处理类库
复制 locale 中的zh-cn的内容 添加到最后一条代码 return _moment 之前把 moment修改为_moment
//关于支持中文问题可以参考 'http://blog.csdn.net/zhouyingge1104/article/details/50596420'

//参考
https://zhuanlan.zhihu.com/p/20367175
https://zhuanlan.zhihu.com/p/20397902

// npm run start   /  npm run build
