module.exports = {
  pwa: {
    name: 'NotSan-Taschenbuch',
    start_url: 'https://notsan.steiiin.de/',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
      exclude: [
        '_redirect',
        '_headers',
        /\.map$/,
        '.htaccess'
      ]
    }
  },
  pluginOptions: {
    vuetify: {}
  }
}
