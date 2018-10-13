const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  devServer: {
    port: 3000
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/FAQ',
          '/om-os',
          '/kontakt-os',
          '/produktet',
          '/info'
        ]
      })
    ]
  },
  chainWebpack: config => {
    config
    .plugin('copy')
    .use(require('copy-webpack-plugin'), [[{
      from: 'public',
      ignore: ['./index.html', '.DS_Store']
    }]])
  }
}
