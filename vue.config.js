module.exports = {
  // eslint-loader 是否在保存的时候检查
  lintOnSave: process.env.NODE_ENV !== "production",

  devServer: {
    // 当出现编译器错误或警告时，在浏览器中显示
    overlay: {
      warnings: false,
      errors: true
    }
  }
};
