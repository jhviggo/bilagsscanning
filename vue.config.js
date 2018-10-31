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
          '/info',
          '/partner'
        ]
      })
    ]
  }
}
