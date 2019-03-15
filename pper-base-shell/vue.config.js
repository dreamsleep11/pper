// 拼接路径

// 基础路径 注意发布之前要先修改这里
let baseUrl = '/'

module.exports = {
  publicPath: baseUrl, // 根据你的实际情况更改这里
  lintOnSave: true,
  devServer: {
    port: 8888,
    publicPath: baseUrl, // 和 baseUrl 保持一致,
    proxy: {
      '/epro': {
        target: '',
        pathRewrite: {
          '^/epro': ''
        },
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style.scss";`,
        options: { sourceMap: true }
      }
    }
  },
  configureWebpack: {}
}
