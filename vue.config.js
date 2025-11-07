module.exports = {
  publicPath: "/portfolio/",

  chainWebpack: config => {
    config.module.rules.delete("eslint");
  }
};