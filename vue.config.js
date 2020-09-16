module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      stylus: {
        import: '~@/util.styl'
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/background.ts',
      builderOptions: {
        productName: 'SAVA音乐'
      }
    }
  }
}
