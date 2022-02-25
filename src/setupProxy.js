const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api', // 只要/api 开头的请求，才转发给后端服务器
      {
        target: 'http://localhost:9001',
        changeOrigin: true, // 控制服务器接收到的请求头中host字段的值
        // false(默认值)：服务器请求来自于原地址 localhost:3000
        // true：服务器请求来自于5000（请求目标地址），可迷惑目标服务器
        pathRewrite: { '^/api': '' } // 重写路径（目的：去掉api前缀）
      }
    )
    // createProxyMiddleware('/api2', {
    //   target: 'http://localhost:5001',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api2': '' }
    // })
  )
}
