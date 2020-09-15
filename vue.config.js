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
      productName: 'SAVA音乐',
      mainProcessFile: 'src/main/background.ts'
    }
  }
}
